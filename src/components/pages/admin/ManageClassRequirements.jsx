import React, { useState } from 'react';
import { FaSearch, FaPlus, FaEdit, FaTrash, FaCheck, FaTimes, FaBook } from 'react-icons/fa';

const ManageClassRequirements = () => {
  const [requirements, setRequirements] = useState([
    { id: 1, className: '10A', subject: 'Mathematics', requirement: 'Graphing calculators', status: 'Pending', date: '2023-06-15' },
    { id: 2, className: '9B', subject: 'Science', requirement: 'Microscope slides', status: 'Fulfilled', date: '2023-06-10' },
    { id: 3, className: '11C', subject: 'Literature', requirement: 'Novel set (20 copies)', status: 'Pending', date: '2023-06-18' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentReq, setCurrentReq] = useState({
    className: '',
    subject: '',
    requirement: '',
    status: 'Pending'
  });

  const filteredRequirements = requirements.filter(req =>
    req.className.toLowerCase().includes(searchTerm.toLowerCase()) ||
    req.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
    req.requirement.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleStatusChange = (id, newStatus) => {
    setRequirements(requirements.map(req =>
      req.id === id ? { ...req, status: newStatus } : req
    ));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReq = {
      ...currentReq,
      id: requirements.length + 1,
      date: new Date().toISOString().split('T')[0]
    };
    setRequirements([...requirements, newReq]);
    setIsModalOpen(false);
    setCurrentReq({ className: '', subject: '', requirement: '', status: 'Pending' });
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold flex items-center">
          <FaBook className="mr-2 text-blue-600" /> Class Requirements
        </h1>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700 transition-colors"
        >
          <FaPlus className="mr-2" /> Add Requirement
        </button>
      </div>

      {/* Search Bar */}
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2">
          <FaSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search by class, subject or requirement..."
            className="bg-transparent w-full outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Requirements Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Class</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Requirement</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredRequirements.length > 0 ? (
                filteredRequirements.map(req => (
                  <tr key={req.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap font-medium">{req.className}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{req.subject}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{req.requirement}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{req.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        req.status === 'Fulfilled' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {req.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap flex space-x-2">
                      <button 
                        onClick={() => handleStatusChange(req.id, req.status === 'Pending' ? 'Fulfilled' : 'Pending')}
                        className={`p-2 rounded-full ${
                          req.status === 'Pending' 
                            ? 'text-green-600 hover:bg-green-100' 
                            : 'text-yellow-600 hover:bg-yellow-100'
                        }`}
                      >
                        {req.status === 'Pending' ? <FaCheck /> : <FaTimes />}
                      </button>
                      <button className="text-blue-600 hover:bg-blue-100 p-2 rounded-full">
                        <FaEdit />
                      </button>
                      <button className="text-red-600 hover:bg-red-100 p-2 rounded-full">
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="px-6 py-4 text-center text-gray-500">
                    No requirements found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Requirement Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4">Add New Requirement</h2>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Class</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      value={currentReq.className}
                      onChange={(e) => setCurrentReq({...currentReq, className: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      value={currentReq.subject}
                      onChange={(e) => setCurrentReq({...currentReq, subject: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Requirement</label>
                    <textarea
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      rows="3"
                      value={currentReq.requirement}
                      onChange={(e) => setCurrentReq({...currentReq, requirement: e.target.value})}
                      required
                    />
                  </div>
                </div>
                <div className="mt-6 flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    Save Requirement
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageClassRequirements;
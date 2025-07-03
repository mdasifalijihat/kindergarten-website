import React, { useState } from 'react';
import { FaSearch, FaPlus, FaEdit, FaTrash, FaCheck, FaTimes } from 'react-icons/fa';

export default function ManageFees() {
  const [fees, setFees] = useState([
    { id: 1, student: 'John Doe', amount: 5000, dueDate: '2023-06-15', status: 'Paid' },
    { id: 2, student: 'Jane Smith', amount: 5000, dueDate: '2023-06-15', status: 'Pending' },
    // More sample data...
  ]);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFees = fees.filter(fee =>
    fee.student.toLowerCase().includes(searchTerm.toLowerCase()) ||
    fee.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Fee Management</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700">
          <FaPlus className="mr-2" /> Add Fee Record
        </button>
      </div>

      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2 mb-6">
          <FaSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search fee records..."
            className="bg-transparent w-full outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredFees.map(fee => (
                <tr key={fee.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{fee.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{fee.student}</td>
                  <td className="px-6 py-4 whitespace-nowrap">${fee.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{fee.dueDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      fee.status === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {fee.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {fee.status === 'Pending' && (
                      <button className="text-green-600 hover:text-green-800 mr-2">
                        <FaCheck />
                      </button>
                    )}
                    <button className="text-blue-600 hover:text-blue-800 mr-2">
                      <FaEdit />
                    </button>
                    <button className="text-red-600 hover:text-red-800">
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
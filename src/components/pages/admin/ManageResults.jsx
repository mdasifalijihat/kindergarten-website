import React, { useState } from 'react';
import { FaSearch, FaPlus, FaEdit, FaTrash, FaChartBar } from 'react-icons/fa';

export default function ManageResults() {
  const [results, setResults] = useState([
    { id: 1, student: 'John Doe', exam: 'Mid-Term', grade: 'A', percentage: '92%' },
    { id: 2, student: 'Jane Smith', exam: 'Mid-Term', grade: 'B+', percentage: '87%' },
    // More sample data...
  ]);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredResults = results.filter(result =>
    result.student.toLowerCase().includes(searchTerm.toLowerCase()) ||
    result.exam.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Result Management</h1>
        <div className="flex space-x-3">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700">
            <FaPlus className="mr-2" /> Add Result
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-green-700">
            <FaChartBar className="mr-2" /> Generate Reports
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2 mb-6">
          <FaSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search results..."
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
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Exam</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grade</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Percentage</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredResults.map(result => (
                <tr key={result.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{result.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{result.student}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{result.exam}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      result.grade === 'A' ? 'bg-green-100 text-green-800' : 
                      result.grade.startsWith('B') ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {result.grade}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{result.percentage}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="text-blue-600 hover:text-blue-800 mr-4">
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
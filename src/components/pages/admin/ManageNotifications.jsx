import React, { useState } from 'react';
import { FaSearch, FaPlus, FaEdit, FaTrash, FaBell } from 'react-icons/fa';

export default function ManageNotifications() {
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'School Reopens', message: 'School will reopen on June 1st', date: '2023-05-20' },
    { id: 2, title: 'Parent-Teacher Meeting', message: 'PTM scheduled for June 10th', date: '2023-05-15' },
    // More sample data...
  ]);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredNotifications = notifications.filter(notification =>
    notification.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    notification.message.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Notification Center</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700">
          <FaPlus className="mr-2" /> New Notification
        </button>
      </div>

      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2 mb-6">
          <FaSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search notifications..."
            className="bg-transparent w-full outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="space-y-4">
          {filteredNotifications.map(notification => (
            <div key={notification.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaBell className="text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-lg">{notification.title}</h3>
                    <span className="text-sm text-gray-500">{notification.date}</span>
                  </div>
                  <p className="text-gray-600 mt-1">{notification.message}</p>
                  <div className="mt-3 flex space-x-3">
                    <button className="text-blue-600 hover:text-blue-800 flex items-center">
                      <FaEdit className="mr-1" /> Edit
                    </button>
                    <button className="text-red-600 hover:text-red-800 flex items-center">
                      <FaTrash className="mr-1" /> Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
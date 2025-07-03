import React from 'react';
import { Link } from 'react-router-dom';
import { FaUsers, FaChalkboardTeacher, FaFileAlt, FaBell, FaMoneyBillWave, FaBookOpen } from 'react-icons/fa';

export default function Dashboard() {
  const stats = [
    { title: 'Total Students', value: 245, change: '+12%', trend: 'up' },
    { title: 'Total Teachers', value: 32, change: '+5%', trend: 'up' },
    { title: 'Classes Today', value: 18, change: '-2%', trend: 'down' },
    { title: 'Pending Fees', value: 15, change: '+3%', trend: 'up' },
  ];

  const recentActivities = [
    { id: 1, activity: 'New student registered', time: '10 mins ago' },
    { id: 2, activity: 'Math class scheduled', time: '25 mins ago' },
    { id: 3, activity: 'Fee payment received', time: '1 hour ago' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <h3 className="text-gray-500 text-sm font-medium">{stat.title}</h3>
            <div className="flex items-end mt-2">
              <p className="text-3xl font-bold">{stat.value}</p>
              <span className={`ml-2 text-sm ${stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Access */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Quick Access</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          <Link to="/admin/students" className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition">
            <FaUsers className="text-3xl text-blue-600 mb-2" />
            <span>Students</span>
          </Link>
          <Link to="/admin/teachers" className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition">
            <FaChalkboardTeacher className="text-3xl text-blue-600 mb-2" />
            <span>Teachers</span>
          </Link>
          <Link to="/admin/results" className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition">
            <FaFileAlt className="text-3xl text-blue-600 mb-2" />
            <span>Results</span>
          </Link>
          <Link to="/admin/notifications" className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition">
            <FaBell className="text-3xl text-blue-600 mb-2" />
            <span>Notifications</span>
          </Link>
          <Link to="/admin/fees" className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition">
            <FaMoneyBillWave className="text-3xl text-blue-600 mb-2" />
            <span>Fees</span>
          </Link>
          <Link to="/admin/class-requirements" className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition">
            <FaBookOpen className="text-3xl text-blue-600 mb-2" />
            <span>Class Requirements</span>
          </Link>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {recentActivities.map(activity => (
            <div key={activity.id} className="flex items-start pb-4 border-b border-gray-100 last:border-0">
              <div className="bg-blue-100 p-2 rounded-full mr-4">
                <FaBell className="text-blue-600" />
              </div>
              <div>
                <p className="font-medium">{activity.activity}</p>
                <p className="text-sm text-gray-500">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
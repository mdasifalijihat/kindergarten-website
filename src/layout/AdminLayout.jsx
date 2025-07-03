import { Link, Outlet } from "react-router-dom";
import { FaSignOutAlt, FaHome, FaUsers, FaChalkboardTeacher, FaFileAlt, FaBell, FaMoneyBillWave, FaBookOpen } from "react-icons/fa";

export default function AdminLayout() {

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-blue-800 text-white p-4">
        <h1 className="text-2xl font-bold mb-8">Admin Panel</h1>
        
        <nav className="space-y-2">
          <Link to="/admin/dashboard" className="flex items-center p-2 rounded hover:bg-blue-700">
            <FaHome className="mr-3" /> Dashboard
          </Link>
          <Link to="/admin/students" className="flex items-center p-2 rounded hover:bg-blue-700">
            <FaUsers className="mr-3" /> Students
          </Link>
          <Link to="/admin/teachers" className="flex items-center p-2 rounded hover:bg-blue-700">
            <FaChalkboardTeacher className="mr-3" /> Teachers
          </Link>
          <Link to="/admin/results" className="flex items-center p-2 rounded hover:bg-blue-700">
            <FaFileAlt className="mr-3" /> Results
          </Link>
          <Link to="/admin/fees" className="flex items-center p-2 rounded hover:bg-blue-700">
            <FaMoneyBillWave className="mr-3" /> Fees
          </Link>
          <Link to="/admin/class-requirements" className="flex items-center p-2 rounded hover:bg-blue-700">
            <FaBookOpen className="mr-3" /> Class Requirements
          </Link>
          <Link to="/admin/notifications" className="flex items-center p-2 rounded hover:bg-blue-700">
            <FaBell className="mr-3" /> Notifications
          </Link>
        </nav>

        <button           
          className="flex items-center p-2 mt-8 rounded hover:bg-blue-700 w-full"
        >
          <FaSignOutAlt className="mr-3" /> Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
}
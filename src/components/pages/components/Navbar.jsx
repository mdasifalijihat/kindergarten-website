import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

export default function Navbar() {
  return (
    <div className="bg-white shadow-md sticky top-0 z-50">
      <div className="navbar max-w-7xl mx-auto px-4">
        {/* Mobile Menu Button */}
        <div className="flex-1 lg:hidden">
          <label htmlFor="menu-drawer" className="btn btn-ghost text-xl">
            <FaBars />
          </label>
        </div>

        {/* Logo */}
        <div className="flex-1 justify-center lg:justify-start">
          <Link to="/" className="text-2xl font-bold text-primary">
            🌈 Kids School
          </Link>
        </div>

        {/* Desktop Menu Items */}
        <div className="hidden lg:flex flex-1 justify-end space-x-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <Link to="/students" className="hover:text-primary">Students</Link>
          <Link to="/teachers" className="hover:text-primary">Teachers</Link>
          <Link to="/results" className="hover:text-primary">Results</Link>
          <Link to="/fees" className="hover:text-primary">Fees</Link>
          <Link to="/notifications" className="hover:text-primary">Notices</Link>
          <Link to="/admin" className="btn btn-sm btn-primary">Admin</Link>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <input id="menu-drawer" type="checkbox" className="drawer-toggle hidden" />
      <div className="drawer-side z-40 lg:hidden">
        <label htmlFor="menu-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-64 bg-base-100 text-base-content space-y-2">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/students">Students</Link></li>
          <li><Link to="/teachers">Teachers</Link></li>
          <li><Link to="/results">Results</Link></li>
          <li><Link to="/fees">Fees</Link></li>
          <li><Link to="/notifications">Notices</Link></li>
          <li><Link to="/admin" className="btn btn-sm btn-primary mt-2">Admin</Link></li>
        </ul>
      </div>
    </div>
  )
}

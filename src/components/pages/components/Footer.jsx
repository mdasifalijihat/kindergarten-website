import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-base-200 text-base-content mt-10">
      <div className="footer p-10 max-w-7xl mx-auto">
        <div>
          <h2 className="text-2xl font-bold text-primary">🌈 Kids Kindergarten</h2>
          <p>
            123 School Road<br />
            Dhaka, Bangladesh<br />
            Phone: +880 1234 567890
          </p>
        </div>

        <div>
          <span className="footer-title">Quick Links</span>
          <a href="/" className="link link-hover">Home</a>
          <a href="/students" className="link link-hover">Students</a>
          <a href="/teachers" className="link link-hover">Teachers</a>
          <a href="/fees" className="link link-hover">Fees</a>
        </div>

        <div>
          <span className="footer-title">Social</span>
          <div className="flex space-x-4 text-xl">
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer"><FaYoutube /></a>
          </div>
        </div>
      </div>

      <div className="text-center py-4 bg-base-300 text-sm">
        © {new Date().getFullYear()} Kids Kindergarten. All rights reserved.
      </div>
    </footer>
  )
}

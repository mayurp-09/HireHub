import { useNavigate } from "react-router-dom";
import Jobs from "../pages/Jobs";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-gray-100 mt-16 border-t">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
{/* Logo + Tagline */}
        <div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            <span className="text-blue-600">HireHub</span>
          </h1>
          <p className="text-sm text-gray-500">
            Find your dream job and hire top talent with ease.
          </p>
        </div>
{/* Links */}
        <div>
          <h2 className="text-gray-800 font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="hover:text-blue-600 cursor-pointer">Home</li>
            <li className="hover:text-blue-600 cursor-pointer">Jobs</li>
            <li className="hover:text-blue-600 cursor-pointer">Login</li>
          </ul>
        </div>
{/* Legal */}
        <div>
          <h2 className="text-gray-800 font-semibold mb-3">Legal</h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="hover:text-blue-600 cursor-pointer">Privacy Policy</li>
            <li className="hover:text-blue-600 cursor-pointer">Terms & Conditions</li>
          </ul>
        </div>
{/* Highlight Box */}
        <div className="bg-white p-4 rounded-xl shadow-sm border">
          <h3 className="text-gray-800 font-semibold mb-2">
            Start your job search 🚀
          </h3>
          <p className="text-sm text-gray-500">
            Explore thousands of opportunities now.
          </p>
          <button onClick={() => navigate("/Jobs")} className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Browse Jobs
          </button>
        </div>
      </div>
{/* Bottom Line */}
      <div className="text-center py-4 text-sm text-gray-500 border-t">
        © {new Date().getFullYear()} HireHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
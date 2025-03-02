import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-gray-800">UniversityStudio</span>
            </Link>
          </div>
          <div className="flex items-center">
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <Link
                to="/"
                className="text-gray-700 hover:text-gray-900 hover:border-b-2 hover:border-blue-500 px-3 py-2 text-sm font-medium"
              >
                홈
              </Link>
              <Link
                to="/services"
                className="text-gray-700 hover:text-gray-900 hover:border-b-2 hover:border-blue-500 px-3 py-2 text-sm font-medium"
              >
                서비스
              </Link>
              <Link
                to="/packages"
                className="text-gray-700 hover:text-gray-900 hover:border-b-2 hover:border-blue-500 px-3 py-2 text-sm font-medium"
              >
                패키지
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 
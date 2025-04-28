import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm bg-white/10 shadow-lg border-b border-white/10">
      <div className="flex justify-between items-center max-w-7xl mx-auto p-4">
        {/* Logo with glow effect */}
        <Link to="/" className="group">
          <div className="flex items-center space-x-2">
            <img className="w-12 h-12 object-contain" src="../src/public/img/home.png" alt="Logo" />

            <h1 className="font-bold text-xl sm:text-2xl flex items-center space-x-1">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 group-hover:from-pink-500 group-hover:to-cyan-500 transition-all duration-500">
                Homi
              </span>
              <span className="text-gray-800 dark:text-gray-200 group-hover:text-cyan-500 transition-colors duration-300">
                X
              </span>
            </h1>
          </div>

        </Link>

        {/* Search bar with glassmorphism */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/20 dark:bg-gray-800/25 p-2 rounded-full flex items-center shadow-sm hover:shadow-md transition-shadow duration-300 border border-white/20 backdrop-blur-sm"
        >
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-28 sm:w-64 px-3 py-1 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-600 transition-all duration-200 focus:w-32 sm:focus:w-72"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button 
            type="submit"
            className="p-2 rounded-lg hover:bg-white/20 dark:hover:bg-gray-700/50 transition-colors duration-200"
          >
            <FaSearch className="text-gray-600 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-200" />
          </button>
        </form>

        {/* Navigation links with hover animations */}
        <ul className="flex gap-4 items-center">
          <Link to="/">
            <li className="hidden text-lg font-semibold sm:inline-block text-gray-700 dark:text-gray-700 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-200 relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 group-hover:w-full transition-all duration-300"></span>
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden text-lg font-semibold sm:inline-block text-gray-700 dark:text-gray-700 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-200 relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 group-hover:w-full transition-all duration-300"></span>
            </li>
          </Link>
          <Link to="/profile">
            {currentUser ? (
              <div className="group relative">
                <img
                  className="rounded-full h-9 w-9 object-cover border-2 border-gray-400 group-hover:border-cyan-400 transition-all duration-300 shadow-sm hover:shadow-lg"
                  src={currentUser.avatar}
                  alt="profile"
                />
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  Profile
                </div>
              </div>
            ) : (
              <li className="text-lg font-semibold text-gray-700 dark:text-gray-700 hover:text-cyan-500 dark:hover:text-slate-900 transition-colors duration-200 px-3 py-1 rounded-full hover:bg-white/20 dark:hover:bg-cyan-300">
                Sign in
              </li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}
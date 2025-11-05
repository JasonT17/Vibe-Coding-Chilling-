import { useState, useRef, useEffect } from 'react';
import { Building2, Search, Bell, User, UserCircle, Settings, Moon, LogOut } from 'lucide-react';

const Header = () => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const userMenuRef = useRef(null);

  const navItems = [
    "TỔNG QUAN",
    "CÔNG VIỆC THIẾT KẾ",
    "DỰ ÁN VÀ DỰ TOÁN CÔNG TRÌNH",
    "KẾ HOẠCH VÀ TIẾN ĐỘ CÔNG VIỆC",
    "QUẢN LÝ DỰ TOÁN VÀ THANH TOÁN"
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setShowUserMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="bg-green-700 text-white">
      {/* Top Bar */}
      <div className="border-b border-green-600">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2 md:space-x-3">
            <Building2 className="h-6 w-6 md:h-8 md:w-8" />
            <div>
              <h1 className="text-base md:text-xl font-bold">W's Dashboard</h1>
              <p className="text-[10px] md:text-xs text-green-200 hidden sm:block">Hệ thống quản lý tài chính</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 md:space-x-4">
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Tìm kiếm..."
                className="pl-10 pr-4 py-2 rounded-lg bg-green-600 text-white placeholder-green-200 focus:outline-none focus:ring-2 focus:ring-green-400 w-48 lg:w-64"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-green-200" />
            </div>
            <button className="p-2 hover:bg-green-600 rounded-lg transition-colors">
              <Search className="h-5 w-5 md:hidden" />
            </button>
            <button className="p-2 hover:bg-green-600 rounded-lg transition-colors">
              <Bell className="h-4 w-4 md:h-5 md:w-5" />
            </button>
            
            {/* User Dropdown */}
            <div className="relative" ref={userMenuRef}>
              <button 
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="p-2 hover:bg-green-600 rounded-lg transition-colors"
              >
                <User className="h-4 w-4 md:h-5 md:w-5" />
              </button>

              {/* Dropdown Menu */}
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-200">
                  <button
                    onClick={() => setShowUserMenu(false)}
                    className="w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-3 transition-colors"
                  >
                    <UserCircle className="h-4 w-4 text-gray-500" />
                    <span>Thông tin cá nhân</span>
                  </button>
                  
                  <button
                    onClick={() => setShowUserMenu(false)}
                    className="w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-3 transition-colors"
                  >
                    <Settings className="h-4 w-4 text-gray-500" />
                    <span>Cài đặt</span>
                  </button>
                  
                  <div className="w-full px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-100 flex items-center justify-between transition-colors">
                    <div className="flex items-center space-x-3">
                      <Moon className="h-4 w-4 text-gray-500" />
                      <span>Dark mode</span>
                    </div>
                    {/* Toggle Switch */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setDarkMode(!darkMode);
                      }}
                      className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
                        darkMode ? 'bg-green-600' : 'bg-gray-300'
                      }`}
                    >
                      <span
                        className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform ${
                          darkMode ? 'translate-x-5' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                  
                  <div className="border-t border-gray-200 my-1"></div>
                  
                  <button
                    onClick={() => setShowUserMenu(false)}
                    className="w-full px-4 py-2.5 text-left text-sm text-red-600 hover:bg-red-50 flex items-center space-x-3 transition-colors"
                  >
                    <LogOut className="h-4 w-4 text-red-600" />
                    <span>Đăng xuất</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="container mx-auto px-2 md:px-4">
        <ul className="flex space-x-1 overflow-x-auto scrollbar-hide">
          {navItems.map((item, index) => (
            <li key={index}>
              <button
                className={`px-2 md:px-4 py-2 md:py-3 text-[10px] md:text-sm font-medium whitespace-nowrap hover:bg-green-600 transition-colors ${
                  index === 0 ? 'bg-green-600 border-b-2 border-white' : ''
                }`}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiMenu, FiBell, FiUser, FiSettings, FiLogOut, FiMoon, FiSun } from 'react-icons/fi'

function Navbar({ toggleSidebar }) {
  const [notifications, setNotifications] = useState([
    { id: 1, text: "Don't forget your meditation session", time: "2 hours ago" },
    { id: 2, text: "New journal prompt available", time: "5 hours ago" },
    { id: 3, text: "You've achieved your weekly goal!", time: "1 day ago" }
  ])
  const [showNotifications, setShowNotifications] = useState(false)
  const [showProfileMenu, setShowProfileMenu] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  
  const handleNotificationClick = () => {
    setShowNotifications(!showNotifications)
    setShowProfileMenu(false)
  }
  
  const handleProfileClick = () => {
    setShowProfileMenu(!showProfileMenu)
    setShowNotifications(false)
  }
  
  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode)
    // In a real app, this would toggle dark mode styles
  }
  
  return (
    <header className="bg-white shadow-sm z-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center md:hidden">
            <button 
              onClick={toggleSidebar}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-primary-500 hover:bg-slate-100 focus:outline-none transition-colors"
            >
              <FiMenu className="h-6 w-6" />
            </button>
          </div>
          
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 hidden md:flex items-center">
              <span className="text-xl font-semibold text-primary-600">MindEase</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button 
                className="p-2 rounded-full text-slate-600 hover:text-primary-500 hover:bg-slate-100 focus:outline-none transition-all"
                onClick={handleNotificationClick}
              >
                <FiBell className="h-5 w-5" />
                {notifications.length > 0 && (
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center h-4 w-4 rounded-full bg-danger-500 text-white text-xs font-bold">
                    {notifications.length}
                  </span>
                )}
              </button>
              
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-slate-100 py-2 animate-fade-in">
                  <h3 className="px-4 py-2 text-sm font-medium text-slate-700 border-b border-slate-100">
                    Notifications
                  </h3>
                  <div className="max-h-64 overflow-y-auto">
                    {notifications.map(notification => (
                      <div 
                        key={notification.id}
                        className="px-4 py-3 hover:bg-slate-50 cursor-pointer transition-colors"
                      >
                        <p className="text-sm text-slate-600">{notification.text}</p>
                        <span className="text-xs text-slate-400">{notification.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <button 
              onClick={handleDarkModeToggle}
              className="p-2 rounded-full text-slate-600 hover:text-primary-500 hover:bg-slate-100 focus:outline-none transition-colors"
            >
              {isDarkMode ? <FiSun className="h-5 w-5" /> : <FiMoon className="h-5 w-5" />}
            </button>
            
            <button 
              className="p-2 rounded-full text-slate-600 hover:text-primary-500 hover:bg-slate-100 focus:outline-none transition-colors"
            >
              <FiSettings className="h-5 w-5" />
            </button>
            
            <div className="border-l border-slate-200 h-6 mx-2" />
            
            <div className="relative">
              <button 
                className="flex items-center text-sm font-medium text-slate-600 hover:text-primary-500 focus:outline-none transition-colors"
                onClick={handleProfileClick}
              >
                <span className="h-8 w-8 rounded-full bg-secondary-100 flex items-center justify-center text-secondary-600 mr-2">
                  <FiUser className="h-5 w-5" />
                </span>
                <span className="hidden md:inline-block">Sarah</span>
              </button>
              
              {showProfileMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-slate-100 py-2 animate-fade-in">
                  <a 
                    href="#profile"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
                  >
                    Your Profile
                  </a>
                  <a 
                    href="#settings"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
                  >
                    Settings
                  </a>
                  <div className="border-t border-slate-100 my-1"></div>
                  <a 
                    href="#logout"
                    className="block px-4 py-2 text-sm text-danger-600 hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex items-center">
                      <FiLogOut className="mr-2 h-4 w-4" />
                      Sign Out
                    </div>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
import { Link, useLocation } from 'react-router-dom'
import { FiHome, FiPieChart, FiBook, FiHeart, FiLifeBuoy, FiX } from 'react-icons/fi'

function SideNav({ isOpen, toggleSidebar, isMobile }) {
  const location = useLocation()
  
  const navItems = [
    { name: 'Home', path: '/', icon: <FiHome className="h-5 w-5" /> },
    { name: 'Dashboard', path: '/dashboard', icon: <FiPieChart className="h-5 w-5" /> },
    { name: 'Journal', path: '/journal', icon: <FiBook className="h-5 w-5" /> },
    { name: 'Affirmations', path: '/affirmations', icon: <FiHeart className="h-5 w-5" /> },
    { name: 'Support', path: '/support', icon: <FiLifeBuoy className="h-5 w-5" /> },
  ]
  
  const isActive = (path) => {
    return location.pathname === path
  }
  
  const sidebarClasses = `
    bg-white shadow-lg md:shadow-none z-20 fixed md:sticky top-0 left-0 bottom-0 
    w-64 transition-transform duration-300 transform 
    ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
    md:flex flex-col flex-shrink-0 h-screen overflow-y-auto
  `
  
  const overlayClasses = `
    fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden 
    transition-opacity duration-300
    ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
  `

  return (
    <>
      <div className={overlayClasses} onClick={toggleSidebar}></div>
      
      <aside className={sidebarClasses}>
        <div className="p-4 flex items-center justify-between border-b border-slate-100">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-semibold text-primary-600">MindEase</span>
          </Link>
          
          {isMobile && (
            <button 
              onClick={toggleSidebar} 
              className="md:hidden p-2 rounded-md text-slate-500 hover:text-primary-500 hover:bg-slate-100 focus:outline-none"
            >
              <FiX className="h-5 w-5" />
            </button>
          )}
        </div>
        
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`
                flex items-center px-4 py-3 text-sm font-medium rounded-lg
                ${isActive(item.path) 
                  ? 'text-white bg-primary-500' 
                  : 'text-slate-600 hover:bg-slate-100'}
                transition duration-150 ease-in-out
              `}
              onClick={isMobile ? toggleSidebar : undefined}
            >
              <span className="mr-3">{item.icon}</span>
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
        
        <div className="p-4">
          <div className="rounded-lg bg-secondary-50 p-4">
            <h4 className="text-sm font-medium text-secondary-900 mb-2">Need help?</h4>
            <p className="text-xs text-secondary-700 mb-3">
              Contact our support team for assistance with any issues.
            </p>
            <Link 
              to="/support" 
              className="text-sm font-medium text-secondary-700 hover:text-secondary-900"
              onClick={isMobile ? toggleSidebar : undefined}
            >
              Get Support →
            </Link>
          </div>
        </div>
      </aside>
    </>
  )
}

export default SideNav
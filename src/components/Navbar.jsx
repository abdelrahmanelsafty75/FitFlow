import { NavLink } from 'react-router-dom'
import { Dumbbell, History, LayoutDashboard, Search } from 'lucide-react'

const navItems = [
  { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/log', label: 'Log', icon: Dumbbell }, 
  { path: '/history', label: 'History', icon: History },
  { path: '/exercises', label: 'Exercises', icon: Search },
]

export default function Navbar() {
  return (
    <nav className="bg-surface/80 backdrop-blur-md border-b border-white/10 sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          <NavLink to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-primary rounded-lg flex items-center justify-center shrink-0">
              <Dumbbell className="w-5 h-5 md:w-6 md:h-6 text-background" />
            </div>
            <span className="text-xl md:text-2xl font-bold text-white">FitFlow</span>
          </NavLink>

          <div className="flex items-center gap-1 md:gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-2 md:px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-primary text-background'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                <item.icon className="w-5 h-5 md:w-4 md:h-4" />
                <span className="hidden sm:inline">{item.label}</span>
              </NavLink>
            ))}
          </div>

        </div>
      </div>
    </nav>
  )
}
import { NavLink } from 'react-router-dom'
import { Dumbbell, History, TrendingUp, Search, Home } from 'lucide-react'

const navItems = [
  { path: '/', label: 'Dashboard', icon: Home },
  { path: '/log', label: 'Log Workout', icon: Dumbbell },
  { path: '/history', label: 'History', icon: History },
  { path: '/progress', label: 'Progress', icon: TrendingUp },
  { path: '/exercises', label: 'Exercises', icon: Search },
]

export default function Navbar() {
  return (
    <nav className="bg-surface/80 backdrop-blur-md border-b border-white/10 sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          <NavLink to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Dumbbell className="w-6 h-6 text-background" />
            </div>
            <span className="text-2xl font-bold text-textMain">FitFlow</span>
          </NavLink>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-primary text-background'
                      : 'text-textMuted hover:text-textMain hover:bg-white/5'
                  }`
                }
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </NavLink>
            ))}
          </div>

        </div>
      </div>
    </nav>
  )
}
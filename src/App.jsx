import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Exercises from './pages/Exercises'
import LogWorkout from './pages/LogWorkout'
import WorkoutHistory from './pages/WorkoutHistory'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'


const Placeholder = ({ title }) => (
  <div className="flex justify-center items-center h-[60vh]">
    <h1 className="text-3xl font-bold text-primary">{title} Page Coming Soon</h1>
  </div>
)

function App() {
  return (
    <div className="min-h-screen bg-background text-white font-sans">
      <Navbar />
      <main className="container mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/log" element={<LogWorkout />} />
          <Route path="/history" element={<WorkoutHistory />} />
          <Route path="/exercises" element={<Exercises />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Exercises from './pages/Exercises'
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
          <Route path="/" element={<Placeholder title="Dashboard" />} />
          <Route path="/log" element={<Placeholder title="Log Workout" />} />
          <Route path="/history" element={<Placeholder title="History" />} />
          <Route path="/progress" element={<Placeholder title="Progress" />} />
          <Route path="/exercises" element={<Exercises />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
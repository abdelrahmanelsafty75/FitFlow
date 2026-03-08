import { useState, useEffect } from 'react'
import { wgerApi } from '../services/api'
import ExerciseCard from '../components/ExerciseCard'
import { Search, Loader } from 'lucide-react'

export default function Exercises() {
  const [exercises, setExercises] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const loadExercises = async (query = '') => {
    setLoading(true)
    setError(null)
    try {
      const data = query 
        ? await wgerApi.searchExercises(query)
        : await wgerApi.getExercises()
      setExercises(data)
    } catch (err) {
      setError("Failed to fetch exercises. Please check your internet connection.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadExercises()
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    loadExercises(searchQuery)
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Exercise Library</h1>
        <p className="text-gray-400">Search and discover exercises from WGER database.</p>
      </div>



      <form onSubmit={handleSearch} className="flex gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search exercises by name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#181818] border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-[#d3ff00] transition-colors"
          />
        </div>
        <button type="submit" className="bg-primary text-black font-bold px-6 py-3 rounded-lg hover:bg-white transition-colors">
          Search
        </button>
      </form>



      {loading && (
        <div className="flex justify-center items-center py-20">
          <Loader className="animate-spin text-primary w-10 h-10" />
        </div>
      )}

      {error && (
        <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-4 rounded-lg text-center">
          {error}
        </div>
      )}

      {!loading && !error && exercises.length === 0 && (
        <div className="text-center text-gray-400 py-10">No exercises found.</div>
      )}

      {!loading && !error && exercises.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exercises.map((exercise) => (
            <ExerciseCard key={exercise.id} exercise={exercise} />
          ))}
        </div>
      )}
    </div>
  )
}
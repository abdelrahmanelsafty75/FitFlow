import { useState } from 'react'
import { useWorkoutStore } from '../store/useWorkoutStore'
import { Search, Trash2, Calendar, Dumbbell } from 'lucide-react'

export default function WorkoutHistory() {
  const logs = useWorkoutStore((state) => state.logs)
  const deleteLog = useWorkoutStore((state) => state.deleteLog)
  const [searchQuery, setSearchQuery] = useState('')

  const filteredLogs = logs.filter((log) =>
    log.exerciseName.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const sortedAndFilteredLogs = [...filteredLogs].sort((a, b) => new Date(b.date) - new Date(a.date))

  const formatDate = (isoString) => {
    const date = new Date(isoString)
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Workout History</h1>
        <p className="text-gray-400">Review your past workouts and track your consistency.</p>
      </div>



      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
        <input
          type="text"
          placeholder="Search logged exercises..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-[#181818] border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-[#d3ff00] transition-colors"
        />
      </div>



      {sortedAndFilteredLogs.length === 0 ? (
        <div className="bg-[#181818] border border-white/5 rounded-2xl p-10 text-center">
          <Dumbbell className="w-12 h-12 text-gray-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">No workouts found</h3>
          <p className="text-gray-400">You haven't logged any workouts yet, or no matches found.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {sortedAndFilteredLogs.map((log) => (
            <div 
              key={log.id} 
              className="bg-[#181818] border border-white/5 rounded-xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-[#d3ff00]/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="bg-white/5 p-3 rounded-lg">
                  <Dumbbell className="w-6 h-6 text-[#d3ff00]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{log.exerciseName}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-400 mt-1">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(log.date)}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between md:justify-end gap-6 flex-1">
                <div className="text-center">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Volume</p>
                  <p className="font-bold text-white">
                    {log.sets} <span className="text-gray-500 font-normal">sets</span> × {log.reps} <span className="text-gray-500 font-normal">reps</span>
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Weight</p>
                  <p className="font-bold text-[#d3ff00] text-lg">{log.weight} kg</p>
                </div>
                <button
                  onClick={() => deleteLog(log.id)}
                  className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-colors"
                  title="Delete Workout"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
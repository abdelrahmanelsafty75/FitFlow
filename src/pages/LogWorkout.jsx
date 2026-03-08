import { useState } from 'react'
import { useWorkoutStore } from '../store/useWorkoutStore'
import { Dumbbell, Save, CheckCircle2 } from 'lucide-react'

export default function LogWorkout() {
  const addLog = useWorkoutStore((state) => state.addLog)
  
  const [exerciseName, setExerciseName] = useState('')
  const [sets, setSets] = useState('')
  const [reps, setReps] = useState('')
  const [weight, setWeight] = useState('')
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!exerciseName || !sets || !reps || !weight) return;

    addLog({
      exerciseName,
      sets: Number(sets),
      reps: Number(reps),
      weight: Number(weight)
    })

    setExerciseName('')
    setSets('')
    setReps('')
    setWeight('')
    
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 3000)
  }

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Log Workout</h1>
        <p className="text-gray-400">Record your sets, reps, and weights to track your progress.</p>
      </div>

      <div className="bg-surface border border-white/10 rounded-2xl p-6 md:p-8 shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Exercise Name</label>
            <div className="relative">
              <Dumbbell className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input
                type="text"
                required
                placeholder="e.g., Bench Press"
                value={exerciseName}
                onChange={(e) => setExerciseName(e.target.value)}
                className="w-full bg-[#0f0f0f] border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
              />
            </div>
          </div>



          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Sets</label>
              <input
                type="number"
                min="1"
                required
                placeholder="3"
                value={sets}
                onChange={(e) => setSets(e.target.value)}
                className="w-full bg-[#0f0f0f] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
              />
            </div>



            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Reps</label>
              <input
                type="number"
                min="1"
                required
                placeholder="10"
                value={reps}
                onChange={(e) => setReps(e.target.value)}
                className="w-full bg-[#0f0f0f] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
              />
            </div>



            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Weight (kg)</label>
              <input
                type="number"
                min="0"
                required
                placeholder="60"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full bg-[#0f0f0f] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center items-center gap-2 bg-primary text-background font-bold px-6 py-4 rounded-lg hover:opacity-90 transition-opacity"
          >
            <Save className="w-5 h-5" />
            Save Workout
          </button>



          {showSuccess && (
            <div className="flex items-center gap-2 text-primary bg-primary/10 p-4 rounded-lg border border-primary/20 animate-pulse">
              <CheckCircle2 className="w-5 h-5" />
              <span>Workout logged successfully!</span>
            </div>
          )}
        </form>
      </div>
    </div>
  )
}
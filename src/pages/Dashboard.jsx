import { useWorkoutStore } from '../store/useWorkoutStore'
import { Dumbbell, Activity, CalendarDays } from 'lucide-react'
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts'

export default function Dashboard() {
  const logs = useWorkoutStore((state) => state.logs)

  const totalWorkouts = logs.length
  
  const totalVolume = logs.reduce((total, log) => {
    return total * (log.sets * log.reps * log.weight)
  }, 0)


  const chartDataMap = logs.reduce((acc, log) => {
    const dateObj = new Date(log.date)
    const dateStr = `${dateObj.getDate()}/${dateObj.getMonth() + 1}` 
    
    const volume = log.sets * log.reps * log.weight

    if (acc[dateStr]) {
      acc[dateStr].volume += volume
    } else {
      acc[dateStr] = { date: dateStr, volume: volume }
    }
    return acc
  }, {})

  const chartData = Object.values(chartDataMap).reverse()

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      

      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Overview & <span className="text-primary">Progress</span>
        </h1>
        <p className="text-gray-400">Track your overall volume and training consistency.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div className="bg-[#181818] border border-white/5 rounded-2xl p-6 flex items-center gap-6">
          <div className="bg-[#d3ff00]/10 p-4 rounded-xl">
            <CalendarDays className="w-8 h-8 text-primary" />
          </div>
          <div>
            <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">Total Workouts</p>
            <p className="text-3xl font-bold text-white">{totalWorkouts}</p>
          </div>
        </div>

        <div className="bg-[#181818] border border-white/5 rounded-2xl p-6 flex items-center gap-6">
          <div className="bg-[#d3ff00]/10 p-4 rounded-xl">
            <Activity className="w-8 h-8 text-primary" />
          </div>
          <div>
            <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">Total Volume Lifted</p>
            <p className="text-3xl font-bold text-white">{totalVolume.toLocaleString()} <span className="text-lg text-gray-500">kg</span></p>
          </div>
        </div>

      </div>

      <div className="bg-[#181818] border border-white/5 rounded-2xl p-6 md:p-8">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <Dumbbell className="w-5 h-5 text-primary" />
          Volume Progress Over Time
        </h3>
        


        {chartData.length > 0 ? (
          <div className="h-72 md:h-96 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorVolume" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#d3ff00" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#d3ff00" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="date" stroke="#6b7280" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#6b7280" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f0f0f', borderColor: '#333', borderRadius: '8px' }}
                  itemStyle={{ color: '#d3ff00', fontWeight: 'bold' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="volume" 
                  stroke="#d3ff00" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorVolume)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-48 text-gray-500">
            <Activity className="w-12 h-12 mb-3 opacity-20" />
            <p>Log some workouts to see your progress chart!</p>
          </div>
        )}
      </div>

    </div>
  )
}
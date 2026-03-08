import { Link } from 'react-router-dom';
import { Activity, Dumbbell, History } from 'lucide-react';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 text-center">
      {/* Hero Section */}
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
                Track<br />
                Progress,<br />
                Build{' '}<span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-green-400">Discipline</span>
      </h1>
      
      <p className="text-textMuted text-xl max-w-2xl mx-auto mb-10">
        Stop guessing. Start tracking. FitFlow helps you log workouts, monitor progress, and achieve your fitness goals.
      </p>
      
      <div className="flex justify-center gap-4 mb-20">
        <Link to="/exercises" className="bg-primary text-background px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-all">
          Start Workout 
        </Link>
        <Link to="/history" className="bg-surface text-white border border-white/10 px-8 py-4 rounded-full font-bold text-lg hover:border-primary transition-colors">
          View History
        </Link>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-8 text-left">
        <div className="bg-surface p-8 rounded-3xl border border-white/5 hover:border-primary/30 transition-colors">
          <Dumbbell className="text-primary mb-4" size={40} />
          <h3 className="text-2xl font-bold mb-2">Huge Library</h3>
          <p className="text-textMuted">Access hundreds of exercises with detailed instructions.</p>
        </div>
        <div className="bg-surface p-8 rounded-3xl border border-white/5 hover:border-primary/30 transition-colors">
          <Activity className="text-primary mb-4" size={40} />
          <h3 className="text-2xl font-bold mb-2">Track Progress</h3>
          <p className="text-textMuted">Visualize your strength gains with interactive charts.</p>
        </div>
        <div className="bg-surface p-8 rounded-3xl border border-white/5 hover:border-primary/30 transition-colors">
          <History className="text-primary mb-4" size={40} />
          <h3 className="text-2xl font-bold mb-2">Workout History</h3>
          <p className="text-textMuted">Keep a permanent log of every set, rep, and weight lifted.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
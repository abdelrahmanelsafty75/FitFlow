export default function ExerciseCard({ exercise }) {
  // default image if no images are available 
  const fallbackImage = "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&auto=format&fit=crop";
  const imageUrl = exercise.images?.length > 0 ? exercise.images[0].image : fallbackImage;


  const cleanDescription = exercise.description 
    ? exercise.description.replace(/<[^>]*>?/gm, '') 
    : "No description available.";


  return (
    <div className="bg-[#181818] rounded-xl overflow-hidden border border-white/5 hover:border-[#d3ff00]/50 transition-colors">
      <img 
        src={imageUrl} 
        alt={exercise.name} 
        className="w-full h-48 object-cover opacity-80 hover:opacity-100 transition-opacity"
      />
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-white truncate" title={exercise.name}>
            {exercise.name}
          </h3>
          <span className="bg-white/10 text-primary text-xs px-2 py-1 rounded">
            {exercise.category?.name || 'Workout'}
          </span>
        </div>
        <p className="text-gray-400 text-sm line-clamp-2 mb-4">
          {cleanDescription}
        </p>
      </div>
    </div>
  )
}
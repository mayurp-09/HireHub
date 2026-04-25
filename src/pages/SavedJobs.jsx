import { useAuth } from "../context/AuthContext";
import AppliedJobCard from "../components/AppliedJobCard"; 

const SavedJobs = () => {
  const { savedJobs } = useAuth();

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Saved Jobs</h1>
        <p className="text-gray-600 mb-8">You have bookmarked {savedJobs.length} jobs.</p>
        
        {savedJobs.length > 0 ? (
          <div className="flex flex-col gap-4">
            {savedJobs.map((job) => (
              // Reusing the horizontal card we made yesterday!
              <AppliedJobCard key={job.id} job={job} isSavedPage={true} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border-2 border-dashed border-gray-200">
            <div className="text-5xl mb-4">🔖</div>
            <h3 className="text-xl font-bold text-gray-800">No bookmarks yet</h3>
            <p className="text-gray-500 mt-2">Click the heart icon on any job to save it for later.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SavedJobs;
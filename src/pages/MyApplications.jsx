import { useAuth } from "../context/AuthContext";
import AppliedJobCard from "../components/AppliedJobCard"; // Import new component

const MyApplications = () => {
  const { applications } = useAuth();

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">My Applications</h1>
        <p className="text-gray-600 mb-8 font-medium">
            You have sent {applications.length} applications.
        </p>
{/* Changed to a 1-column list for horizontal cards */}
        {applications.length > 0 ? (
          <div className="flex flex-col gap-4">
            {applications.map((job) => (
              <AppliedJobCard key={job.id} job={job} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
            <h3 className="text-xl font-bold text-gray-800">No applications found.</h3>
            <p className="text-gray-500 mt-2">Go to the Jobs page to start applying!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyApplications;
import { useParams, useNavigate } from "react-router-dom";
import jobs from "../data/jobs";
import { useAuth } from "../context/AuthContext";

const JobDetails = () => {
  const { id } = useParams();
  const { user, applyToJob, applications } = useAuth();
  const navigate = useNavigate();

  // 1. This is your new source of truth for the UI
  const isJobAlreadyApplied = applications.some((app) => String(app.id) === String(id));
  
  const job = jobs.find((j) => String(j.id) === String(id));

  const handleApply = () => {
    if (!user) {
      navigate("/login");
    } else {
      applyToJob(job);
    }
  };

  if (!job) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-2xl font-bold text-gray-800">Job not found</h1>
        <button onClick={() => navigate("/jobs")} className="mt-4 text-blue-600 hover:underline">
          Go back to jobs
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      
      {/* 1. TOP HERO SECTION */}
      <div className="bg-white border-b">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase">
                {job.type}
              </span>
              <h1 className="text-4xl font-bold text-gray-900 mt-3">{job.title}</h1>
              <p className="text-xl text-gray-600 mt-2 font-medium">{job.company} • {job.location}</p>
            </div>
            
            {/* 2. Using isJobAlreadyApplied here */}
            {!isJobAlreadyApplied ? (
              <button
                onClick={handleApply}
                className="bg-blue-600 text-white px-10 py-3 rounded-xl font-semibold text-lg hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all active:scale-95"
              >
                Apply for this job
              </button>
            ) : (
              <div className="bg-green-100 text-green-700 px-6 py-3 rounded-xl font-bold border border-green-200">
                ✅ Application Sent
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 2. MAIN CONTENT GRID */}
      <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        <div className="lg:col-span-2 space-y-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
              <p className="text-xs text-gray-500 font-bold uppercase">Salary</p>
              <p className="text-gray-800 font-semibold">{job.salary}</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
              <p className="text-xs text-gray-500 font-bold uppercase">Experience</p>
              <p className="text-gray-800 font-semibold">{job.level || "Entry Level"}</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
              <p className="text-xs text-gray-500 font-bold uppercase">Posted</p>
              <p className="text-gray-800 font-semibold">{job.postedAt || "Recently"}</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl border shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Job Description</h3>
            <p className="text-gray-600 leading-relaxed">
              We are looking for a talented {job.title} to join our growing team at {job.company}. 
              In this role, you will work on modern technologies and build amazing products.
            </p>
          </div>
        </div>

        {/* RIGHT: Sidebar */}
        <div className="space-y-6">
          <div className="bg-blue-600 p-6 rounded-2xl text-white shadow-xl">
            <h3 className="text-lg font-bold mb-2">Ready to take the next step?</h3>
            <p className="text-blue-100 text-sm mb-4">
              Submit your application today.
            </p>
            {/* 3. Also updated the sidebar button here */}
            <button 
              disabled={isJobAlreadyApplied}
              onClick={handleApply}
              className={`w-full py-3 rounded-xl font-bold transition-all ${isJobAlreadyApplied ? 'bg-blue-400 cursor-not-allowed opacity-80' : 'bg-white text-blue-600 hover:bg-gray-100'}`}
            >
              {isJobAlreadyApplied ? "Already Applied" : "Quick Apply"}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default JobDetails;
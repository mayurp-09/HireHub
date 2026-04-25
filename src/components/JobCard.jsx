import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const JobCard = ({ job }) => {
  const { toggleSaveJob, savedJobs } = useAuth();

  // Check if this job is currently saved
  const isSaved = savedJobs.some((j) => String(j.id) === String(job.id));

  const handleSave = (e) => {
    e.preventDefault(); // Prevents clicking the heart from opening the job details
    toggleSaveJob(job);
  };

  return (
    <div className="bg-white rounded-2xl p-5 border hover:shadow-lg transition duration-300 hover:-translate-y-1">
{/* Top Section */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
{/* Logo */}
          {job.logo ? (
            <img
              src={job.logo}
              alt={job.company}
              className="w-11 h-11 rounded-full object-cover border"/>
          ) : (
            <div className="w-11 h-11 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium text-gray-600">
              {job.company?.charAt(0)}
            </div>
          )}
          <div>
            <p className="text-sm font-semibold text-gray-800">
              {job.company}
            </p>
            <p className="text-xs text-gray-500">
              {job.postedAt}
            </p>
          </div>
        </div>
{/* Save Button */}
        <button onClick={handleSave} className="text-xs border px-3 py-1 rounded-full text-gray-500 hover:bg-gray-100 transition">
          {isSaved ? (
          <span className="text-red-500 text-xl">❤️</span> 
        ) : (
          <span className="text-gray-300 text-xl group-hover:text-gray-400">🤍</span>
        )}
        </button>
      </div>
{/* Job Title */}
      <h2 className="mt-4 text-lg font-semibold text-gray-900 leading-snug">
        {job.title}
      </h2>
{/* Tags */}
      <div className="flex gap-2 mt-3 flex-wrap">
        <span className="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full">
          {job.type}
        </span>
        <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
          {job.level}
        </span>
      </div>
{/* Divider */}
      <div className="my-4 border-t"></div>
{/* Bottom Section */}
      <div className="flex items-center justify-between">
        <div>
          <p className="font-semibold text-gray-800">
            {job.salary}
          </p>
          <p className="text-sm text-gray-500">
            {job.location}
          </p>
        </div>
        <Link
          to={`/jobs/${job.id}`}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition">
          Apply
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
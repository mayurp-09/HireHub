import { Link } from "react-router-dom";

// 1. Add isSavedPage to the props
const AppliedJobCard = ({ job, isSavedPage }) => {
  return (
    <div className="bg-white border rounded-xl p-4 flex flex-col md:flex-row items-center justify-between hover:shadow-md transition gap-4"> 
      
      {/* Left side: Logo and Title */}
      <div className="flex items-center gap-4 w-full md:w-auto">
        <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center font-bold text-xl border border-blue-100 shrink-0">
          {job.company?.charAt(0)}
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-900 leading-tight">
            {job.title}
          </h3>
          <p className="text-gray-600 font-medium">{job.company}</p>
          <div className="flex gap-2 mt-1">
            <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-500">{job.location}</span>
            <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-500">{job.type}</span>
          </div>
        </div>
      </div>

      {/* Right side: Status and Actions */}
      <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end border-t md:border-none pt-3 md:pt-0">
        <div className="text-right">
          <p className="text-sm font-bold text-gray-800">{job.salary}</p>
          {/* 2. Hide "Applied on" if we are on the Saved page */}
          {!isSavedPage && (
            <p className="text-xs text-green-600 font-medium">Applied on: {new Date().toLocaleDateString()}</p>
          )}
        </div>

        <div className="flex gap-2">
          <Link 
            to={`/jobs/${job.id}`}
            className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 font-medium">
            View Details
          </Link>

          {/* 3. DYNAMIC BADGE: Show Saved or Applied */}
          {isSavedPage ? (
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg text-sm font-bold">
               🔖 Saved
            </span>
          ) : (
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-lg text-sm font-bold">
               ✓ Applied
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppliedJobCard;
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import jobs from "../data/jobs";
import { useAuth } from "../context/AuthContext";

const JobDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [applied, setApplied] = useState(false);

  // Find the job. Note: parseInt is used to match the ID type.
  const job = jobs.find((j) => j.id === parseInt(id));

  const handleApply = () => {
    if (!user) {
      navigate("/login");
    } else {
      setApplied(true);
    }
  };

  if (!job) {
    return <h1 className="text-center mt-10">Job not found</h1>;
  }

  return (
    <div className="bg-gray-50 min-h-screen px-6 py-10">
      <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
      <p className="text-gray-600">{job.company}</p>
      
      <div className="mt-6">
        <p><strong>Type:</strong> {job.type}</p>
        <p><strong>Salary:</strong> {job.salary}</p>
      </div>

      {!applied ? (
        <button
          onClick={handleApply}
          className="mt-8 bg-blue-600 text-white px-6 py-2 rounded-lg"
        >
          Apply Now
        </button>
      ) : (
        <p className="text-green-600 mt-4 font-medium">
          ✅ Application submitted successfully!
        </p>
      )}
    </div>
  );
};

export default JobDetails;
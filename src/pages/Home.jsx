import JobCard from "../components/JobCard";
import jobs from "../data/jobs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    if (search.trim() !== "") {
      navigate(`/jobs?search=${search}`);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HERO SECTION */}
      <div className="bg-white border-b">
         <div className="max-w-4xl mx-auto text-center min-h-[90vh] flex flex-col justify-center px-4">
          <h1 className="text-5xl font-bold text-blue-600">
            HireHub
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Find Your Dream Job
          </h2>
          <div className="flex justify-center gap-8 mt-6 text-gray-600 text-sm">
            <span><b>10K+</b> Jobs</span>
            <span><b>500+</b> Companies</span>
            <span><b>2K+</b> Candidates</span>
          </div>

          <p className="mt-4 text-gray-600 text-lg">
            Explore thousands of job opportunities with HireHub
          </p>


          {/* Search Bar */}
          <form
            onSubmit={handleSearch}
            className="mt-8 flex items-center bg-white border rounded-lg shadow-sm overflow-hidden"
          >
            <input
              type="text"
              placeholder="Search jobs (e.g. Frontend, React...)"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 px-4 py-3 outline-none"
            />

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 hover:bg-blue-700"
            >
              Search
            </button>
          </form>
          <div className="mt-6 text-sm text-gray-500">
            Popular: 
            <span
              onClick={() => navigate("/jobs?search=Frontend")}
              className="ml-2 text-blue-600 cursor-pointer hover:underline"
            >
              Frontend
            </span>
            <span
              onClick={() => navigate("/jobs?search=Backend")}
              className="ml-3 text-blue-600 cursor-pointer hover:underline"
            >
              Backend
            </span>
            <span
              onClick={() => navigate("/jobs?search=React")}
              className="ml-3 text-blue-600 cursor-pointer hover:underline"
            >
              React
            </span>
          </div>
        </div>
      </div>
      
      {/* FEATURED JOBS */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 py-16">

        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">
            Featured Jobs
          </h2>

          <button
            onClick={() => navigate("/jobs")}
            className="text-blue-600 hover:underline text-sm font-medium"
          >
            View all jobs →
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {jobs.slice(0, 3).map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

      </div>

    </div>
  );
};

export default Home;
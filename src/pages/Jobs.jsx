import JobCard from "../components/JobCard";
import jobs from "../data/jobs";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Jobs = () => {

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const urlSearch = queryParams.get("search") || "";

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedType, setSelectedType] = useState("");

  // 🔥 Sync URL → state
  useEffect(() => {
    setSearchTerm(urlSearch);
  }, [urlSearch]);

  const filteredJobs = jobs.filter((job) => {
    const search = searchTerm.toLowerCase();

    return (
      (job.title.toLowerCase().includes(search) ||
        job.company.toLowerCase().includes(search)) &&

      (selectedLocation === "" ||
        job.location.toLowerCase().includes(selectedLocation.toLowerCase())) &&

      (selectedType === "" || job.type === selectedType)
    );
  });

  return (
    <div className="bg-gray-50 min-h-screen px-6 md:px-10 lg:px-16 py-10">
      
      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">

        <input
          type="text"
          placeholder="Search jobs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/3 px-4 py-2 border rounded-lg"
        />

        <select
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
          className="px-4 py-2 border rounded-lg"
        >
          <option value="">All Locations</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Pune">Pune</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Remote">Remote</option>
        </select>

        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="px-4 py-2 border rounded-lg"
        >
          <option value="">All Types</option>
          <option value="Full Time">Full Time</option>
          <option value="Part Time">Part Time</option>
        </select>

      </div>

      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Available Jobs
      </h1>

      {filteredJobs.length === 0 ? (
        <p className="text-gray-600">No jobs found</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Jobs;
import React, { useState } from "react";
import JobCard from "./JobCard";
import "./App.css";

const sampleJobs = [
  {
    title: "Frontend Developer",
    company: "Tech Solutions",
    location: "Remote",
    type: "Full-Time",
    description: "Develop and maintain web applications using React.js.",
  },
  {
    title: "Backend Developer",
    company: "Innovatech",
    location: "Mumbai, India",
    type: "Part-Time",
    description: "Build and optimize server-side applications.",
  },
  {
    title: "Remote Data Analyst",
    company: "DataWorks",
    location: "Remote",
    type: "Full-Time",
    description: "Analyze and interpret complex data sets.",
  },
  {
    title: "UX/UI Designer",
    company: "Creative Co.",
    location: "New York, NY",
    type: "Full-Time",
    description: "Design engaging and user-friendly interfaces.",
  },
  {
    title: "DevOps Engineer",
    company: "CloudNet",
    location: "Remote",
    type: "Intern",
    description: "Manage and optimize cloud infrastructure.",
  },
  {
    title: "Marketing Specialist",
    company: "Bright Minds",
    location: "Hyderabad, India",
    type: "Part-Time",
    description: "Create and implement digital marketing strategies.",
  },
  {
    title: "Project Manager",
    company: "BuildNow",
    location: "Remote",
    type: "Full-Time",
    description: "Oversee projects and coordinate team efforts.",
  },
  {
    title: "Customer Support Specialist",
    company: "HelpDesk",
    location: "Remote",
    type: "Intern",
    description: "Provide support and resolve customer inquiries.",
  },
];

function App() {
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("All");

  //  location options
  const locations = ["All", ...new Set(sampleJobs.map((job) => job.location))];

  const handleFilterChange = (e) => setFilter(e.target.value);
  const handleSearchChange = (e) => setSearchTerm(e.target.value);
  const handleLocationChange = (e) => setLocationFilter(e.target.value);

  // Filter and search
  const filteredJobs = sampleJobs.filter((job) => {
    const matchesFilter = filter === "All" || job.type === filter || job.location === filter;
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = locationFilter === "All" || job.location === locationFilter;
    return matchesFilter && matchesSearch && matchesLocation;
  });

  return (
    <div className="App">
      <h1>Job Listings</h1>
      <div className="controls">
        <select value={filter} onChange={handleFilterChange}>
          <option value="All">All Types</option>
          <option value="Full-Time">Full-Time</option>
          <option value="Part-Time">Part-Time</option>
          <option value="Intern">Intern</option>
          <option value="Remote">Remote</option>
        </select>
        <select value={locationFilter} onChange={handleLocationChange}>
          {locations.map((location, index) => (
            <option key={index} value={location}>
              {location}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Search by job title..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      {filteredJobs.length > 0 ? (
        filteredJobs.map((job, index) => <JobCard key={index} job={job} />)
      ) : (
        <p>No jobs found matching your criteria.</p>
      )}
    </div>
  );
}

export default App;

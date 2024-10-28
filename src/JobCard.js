import React from "react";
import "./JobCard.css";

const JobCard = ({ job }) => {
    return (
        <div className="job-card">
            <h3>{job.title}</h3>
            <p className="company">{job.company}</p>
            <p className="location">{job.location}</p>
            <p className="type">{job.type}</p>
            <p className="description">{job.description}</p>
            <button className="apply-btn">Apply Now</button>
        </div>
    );
};

export default JobCard;

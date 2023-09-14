import React, { useState, useEffect } from "react";
import "./Home.css";

const Home = () => {
  const [experiences, setExperiences] = useState([]);
  const [newExperience, setNewExperience] = useState("");

  useEffect(() => {
    // Fetch all the experiences from a database or API here
    const allExperiences = [
      { id: 1, experience: "Interview Experience 1" },
      { id: 2, experience: "Interview Experience 2" },
      { id: 3, experience: "Interview Experience 3" },
    ];

    setExperiences(allExperiences);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add the new experience to the database or API here
    setExperiences([...experiences, { id: experiences.length + 1, experience: newExperience }]);
    setNewExperience("");
  };

  return (
    <div className="home-container">
      <h1 className="home-title">MyInterview</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          className="experience-input"
          placeholder="Write your interview experience here..."
          value={newExperience}
          onChange={(e) => setNewExperience(e.target.value)}
        />
        <button className="submit-button">Submit</button>
      </form>
      <h2 className="experience-title">Available Interview Experiences</h2>
      <ul className="experience-list">
        {experiences.map((experience) => (
          <li key={experience.id} className="experience-item">
            {experience.experience}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

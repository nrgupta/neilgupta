import { Link } from "react-router-dom";
import { config } from "../config";
import "./Courses.css";

const Courses = () => {
  return (
    <div className="courses-page">
      <div className="courses-header">
        <Link to="/" className="back-button" data-cursor="disable">
          <span className="back-button-arrow">←</span> Back to Home
        </Link>
        <h1>
          Courses <span>&amp; Learning</span>
        </h1>
        <p>College coursework and personal learning</p>
      </div>

      <div className="courses-section">
        <h2>College Courses</h2>
        <div className="courses-grid">
          {config.courses.college.map((course) => (
            <div className="course-card" key={course.code} data-cursor="disable">
              <div className="course-code">{course.code}</div>
              <h3>{course.name}</h3>
              <p>{course.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="courses-section">
        <h2>Personal Learning</h2>
        <div className="courses-grid">
          {config.courses.personal.map((course) => (
            <div className="course-card" key={course.code} data-cursor="disable">
              <div className="course-code">{course.code}</div>
              <h3>{course.name}</h3>
              <p>{course.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;

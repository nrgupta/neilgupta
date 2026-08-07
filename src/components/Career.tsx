import { useEffect, useRef } from "react";
import "./styles/Career.css";
import { config } from "../config";

const Career = () => {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("career-item-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px -10% 0px" }
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          My <span>Experience</span>
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {config.experiences.map((exp, index) => (
            <div
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              className="career-info-box career-item-left"
            >
              <h3 className="career-date">{exp.period}</h3>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{exp.position}</h4>
                  <h5>
                    {exp.logo && (
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="career-company-logo"
                      />
                    )}
                    {exp.company}
                  </h5>
                </div>
              </div>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;

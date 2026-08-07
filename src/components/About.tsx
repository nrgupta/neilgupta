import { useEffect, useRef, useState } from "react";
import "./styles/About.css";
import { config } from "../config";

const CHAR_SPEED = 18;
const LINE_PAUSE = 150;

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [typedLines, setTypedLines] = useState<string[]>([]);
  const [activeLine, setActiveLine] = useState(-1);
  const [done, setDone] = useState(false);
  const started = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          observer.disconnect();

          const lines = config.about.description;
          let cancelled = false;

          const typeLine = (lineIndex: number) => {
            if (cancelled) return;
            if (lineIndex >= lines.length) {
              setActiveLine(-1);
              setDone(true);
              return;
            }
            setActiveLine(lineIndex);
            const text = lines[lineIndex];
            let charIndex = 0;

            const tick = () => {
              if (cancelled) return;
              if (charIndex <= text.length) {
                setTypedLines((prev) => {
                  const next = [...prev];
                  next[lineIndex] = text.slice(0, charIndex);
                  return next;
                });
                charIndex++;
                setTimeout(tick, CHAR_SPEED);
              } else {
                setTimeout(() => typeLine(lineIndex + 1), LINE_PAUSE);
              }
            };
            tick();
          };

          typeLine(0);

          return () => {
            cancelled = true;
          };
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-section" id="about" ref={sectionRef}>
      <div className="about-me">
        <h3 className="title">{config.about.title}</h3>
        {config.about.description.map((_, index) => (
          <p className="typewriter-line" key={index}>
            {typedLines[index] || ""}
            {activeLine === index && !done && (
              <span className="typewriter-cursor" />
            )}
          </p>
        ))}
      </div>
    </div>
  );
};

export default About;

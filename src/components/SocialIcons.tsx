import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import "./styles/SocialIcons.css";
import { TbMail, TbNotes } from "react-icons/tb";
import { config } from "../config";

const SocialIcons = () => {
  return (
    <div className="social-icons" id="social">
      <a
        href={config.contact.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FaGithub />
      </a>
      <a
        href={config.contact.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedinIn />
      </a>
      <a
        className="resume-button"
        href="/files/RESUME_GUPTA_NEIL.pdf"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Resume"
      >
        <TbNotes />
      </a>
      <a
        className="email-button"
        href={`mailto:${config.social.email}`}
        aria-label="Email"
      >
        <TbMail />
      </a>
    </div>
  );
};

export default SocialIcons;

import { Link } from "react-router-dom";
import "./styles/CallToAction.css";

const CallToAction = () => {
  return (
    <div className="cta-section">
      <div className="cta-buttons">
        <Link to="/play" className="cta-btn cta-btn-play" data-cursor="disable">
          Chat With Me →
        </Link>
      </div>
    </div>
  );
};

export default CallToAction;

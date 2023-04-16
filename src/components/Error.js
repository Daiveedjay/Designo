import { Link } from "react-router-dom";
import "./Error.scss";

// Error component
export default function Error() {
  return (
    <div className="error_section">
      {/* // Use the Link component from react-router-dom to navigate back to the
      home page */}
      <Link className="back-to-home lead--text" to="/">
        Back to Home
      </Link>
    </div>
  );
}

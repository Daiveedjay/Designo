import { NavLink } from "react-router-dom";
import "./Button.scss";

// Button component
export default function Button({ buttonContent, link }) {
  // Render a NavLink component with the given buttonContent and link
  return <NavLink to={link}>{buttonContent}</NavLink>;
}

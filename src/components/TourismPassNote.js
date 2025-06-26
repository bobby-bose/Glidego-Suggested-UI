import React from "react";
import PropTypes from "prop-types";
import "./TourismPassNote.css";
import ticketIcon from "../assets/icons/ticket.svg";  // adjust if your path differs

/**
 * The bubble that says:
 *   🟨  “ This Plan doesn't include a tourism pass . ”
 */
export default function TourismPassNote({
  text = "This Plan doesn't include a tourism pass .",
  icon = ticketIcon,
}) {
  return (
    <div className="tourism-note">
      {icon && <img src={icon} alt="ticket" className="note-icon" />}
      <span className="note-text">“ {text} ”</span>
    </div>
  );
}

TourismPassNote.propTypes = {
  /** message inside the bubble */
  text: PropTypes.string,
  /** optional icon URL / import */
  icon: PropTypes.string,
};

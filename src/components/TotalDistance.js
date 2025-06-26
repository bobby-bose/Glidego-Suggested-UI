import React from "react";
import ticketIcon from "../assets/icons/ticket.svg"; // make sure this icon exists
import "../styles/TotalDistance.css";

export default function TotalDistance() {
  return (
    <div className="distance-box">
      {/* Total KM */}
      <div className="km-part">
        <span className="label">Total Kilometer</span>
        <span className="value">716 KM</span>
      </div>

      {/* Tourism Pass Note */}
      <div className="note-bubble">
        <img src={ticketIcon} alt="ticket" className="icon" />
        <span className="note-text">“ This Plan doesn't include a tourism pass .”</span>
      </div>
    </div>
  );
}

import React from "react";
import PropTypes from "prop-types";
import "../../styles/Hotels.css";



export default function HotelCard({
  idx = 1,
  name = "Gokulam Park Hotel",
  tagline = "Modern rooms • Free Wi-Fi • Breakfast included",
  img = "https://images.unsplash.com/photo-1551918120-9739cb43089b"
}) {
  return (
    <div className="hotel-card">
      {/* hero image + index badge */}
      <div className="hotels-img-wrap">
        <img className="hotels-hero" src={img} alt={name} />
        <span className="badge">{idx}</span>
      </div>

      {/* info block */}
      <div className="content">
        <h3 className="name" style={{fontSize:'1.3rem'}}>{name}</h3>
        <p className="tagline">{tagline}</p>
      </div>
    </div>
  );
}

HotelCard.propTypes = {
  idx:     PropTypes.number,
  name:    PropTypes.string,
  tagline: PropTypes.string,
  img:     PropTypes.string,
};

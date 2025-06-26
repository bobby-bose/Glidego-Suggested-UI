import React from "react";
import PropTypes from "prop-types";
import "../../styles/Cabs.css";

export default function CabCard({
  idx = 1,
  name = "OD",
  img  = "#"
}) {
  return (
    <div className="cab-card">
      <div className="cabs-img-wrap">
        <img className="hero" src={img} alt={name} />
        <span className="badge">{idx}</span>
      </div>

      <div className="content">
        <h4 className="name" style={{fontSize:'1.3rem'}}>{name}</h4>
      </div>
    </div>
  );
}

CabCard.propTypes = {
  idx:  PropTypes.number,
  name: PropTypes.string,
  img:  PropTypes.string
};

import React from "react";
import PropTypes from "prop-types";
import "../../styles/Places.css";


export default function PlaceCard({ img, title, desc, idx }) {
  return (
    <div className="place-card">
      {/* image + sequence badge */}
      <div className="palces-img-wrap">
        <img className="place-hero" src={img} alt={title} />
        <span className="badge">{idx}</span>
      </div>

      {/* text block */}
      <div className="content">
        <h3 className="title">{title}</h3>
        <p className="desc">{desc}</p>
      </div>
    </div>
  );
}

PlaceCard.propTypes = {
  idx:   PropTypes.number,
  title: PropTypes.string,
  desc:  PropTypes.string,
  img:   PropTypes.string,
};

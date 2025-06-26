import React from "react";
import PropTypes from "prop-types";
import "../../src/styles/SectionHeader.css";


export default function HotelsSectionHeader({ title, children, sx = {} }) {
  return (
    <div className="hotels-section-header" style={sx}>
      <h2 className="section-title" style={{paddingTop:'0',paddingLeft:'0'}}>{title}</h2>
      {children && <div className="section-actions">{children}</div>}
    </div>
  );
}

HotelsSectionHeader.propTypes = {
  title:    PropTypes.string.isRequired,
  children: PropTypes.node,
  /** inline overrides (CSS-in-JS style) */
  sx:       PropTypes.object,
};

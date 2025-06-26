import React from "react";
import PropTypes from "prop-types";
import "../../src/styles/SectionHeader.css";


export default function PlacesSectionHeader({ title, children, sx = {} }) {
  return (
    <div className="places-section-header" style={sx}>
      <h2 className="section-title">{title}</h2>
      {children && <div className="section-actions">{children}</div>}
    </div>
  );
}

PlacesSectionHeader.propTypes = {
  title:    PropTypes.string.isRequired,
  children: PropTypes.node,
  /** inline overrides (CSS-in-JS style) */
  sx:       PropTypes.object,
};

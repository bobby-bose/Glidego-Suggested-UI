import React from "react";
import CabCard from "./CabCard";
import cabs from "./cabsData.json";
import "../../styles/Cabs.css";


export default function CabsGrid() {
  return (
    <section className="cabs-panel">
      <h3 className="panel-title">Cabs by defund car</h3>

      <div className="grid">
        {cabs.map((c, i) => (
          <CabCard key={c.id} idx={i + 1} name={c.name} img={c.img} />
        ))}
      </div>
    </section>
  );
}

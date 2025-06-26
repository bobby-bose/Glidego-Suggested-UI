import React from "react";
import PlaceCard from "./PlaceCard";
import places from "./placesData.json";
import "../../styles/Places.css";



export default function PlacesList() {
  return (
    <div className="places-strip">
      {places.map((p, i) => (
        <PlaceCard
          key={p.id}
          idx={i + 1}
          title={p.name}
          desc={p.desc}
          img={p.image}
        />
      ))}
    </div>
  );
}

import React from "react";
import HotelCard from "./HotelCard";
import hotels from "./hotelsData.json";
import "../../styles/HotelList.css";


export default function HotelsList() {
  return (
    <div className="hotels-strip">
      {hotels.map((hotel, i) => (
        <HotelCard
          key={hotel.id}
          idx={i + 1}
          name={hotel.name}
          img={hotel.img}
        />
      ))}
    </div>
  );
}

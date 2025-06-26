import React from "react";
import HotelsSectionHeader   from "./components/HotelsSectionHeader";
import PlacesSectionHeader from "./components/PlacesSectionHeader";
import PlacesList      from "./components/Places/PlacesList";
import HotelsList      from "./components/Hotels/HotelsList";
import CabsGrid        from "./components/Cabs/CabsList";
import TotalDistance   from "./components/TotalDistance";
import "./styles/App.css";


export default function App() {
  return (
    <>
      <PlacesSectionHeader title="Suggested Places To Visit" />
      <PlacesList />


    <div className="dashboard">
      {/* LEFT 60 %  ------------------------------------------------ */}
      <div className="left-col">
        {/* upper 50 %  – Suggested Hotels */}
        <div className="left-top">
          <HotelsSectionHeader title="Suggested Hotels" />
          <HotelsList />
        </div>

        {/* lower 50 %  – distance bar */}
        <div className="left-bottom">
          <TotalDistance />
        </div>
      </div>

      {/* RIGHT 40 %  ------------------------------------------------ */}
      <div className="right-col">
        <CabsGrid />
      </div>
    </div>

    </>
  );
}

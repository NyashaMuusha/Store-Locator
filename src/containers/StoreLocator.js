import React from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import Map from "../components/Map";

const StoreLocator = () => {
  return (
    <div>
      <Header />
      <div>
        <Button location="Portland" />
        <Button location="Astoria" />
        <Button location="All Locations" />
      </div>
      <Map />
    </div>
  );
};

export default StoreLocator;
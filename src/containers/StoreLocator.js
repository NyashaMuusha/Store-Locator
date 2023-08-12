import React, { useState } from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import Map from "../components/Map";
import mapChooser from "../mapChooser";

const StoreLocator = () => {
  const [currentMap, setCurrentMap] = useState("none.png");
  const [location, setLocation] = useState("");

  const shops = [
    {
      location: "Portland",
      address: "123 Portland Dr",
    },
    {
      location: "Astoria",
      address: "123 Astoria Dr",
    },
    {
      location: "",
      address: "",
    },
  ];

  const chooseMap = (location) => {
    setCurrentMap(mapChooser(location));
    setLocation(location);
  };

  const storeButtons = shops.map((shop, id) => (
    <Button handleClick={chooseMap} key={id} location={shop.location} />
  ));

  return (
    <div>
      <Header />
      <div>{storeButtons}</div>
      <Map imagename={currentMap} location={location} />
    </div>
  );
};

export default StoreLocator;

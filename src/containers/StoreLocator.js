import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import Map from "../components/Map";
import mapChooser from "../mapChooser";
import axios from 'axios';

const StoreLocator = () => {
  const [currentMap, setCurrentMap] = useState("none.png");
  const [location, setLocation] = useState("");
  const [shops, setShops] = useState([]);

   useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:3000/data/shops.json');
        setShops(response.data.shops);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

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

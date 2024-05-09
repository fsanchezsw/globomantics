import { useEffect, useState } from "react";
import { AddHouseItem } from "./add-house-item";
import { HouseItem } from "./house-item";

export interface House {
  id: number;
  address: string;
  country: string;
  price: number;
};

const HouseList = () => {
  const [houses, setHouses] = useState<House[]>([]);

  useEffect(() => {
    const fetchHouses = async () => {
      const response = await fetch("/api/houses");
      const houses = await response.json();

      setHouses(houses);
    };

    fetchHouses();
  }, []);

  const addHouse = (newHouse: House) => {
    setHouses([...houses, newHouse]);
  };

  return (
    // React.Fragment can be abbreviated as <>
    <>
      <div className="row mb-2">
        <h5 className="theme-font-color text-center">
          Houses currently on the market
        </h5>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Address</th>
            <th>Country</th>
            <th>Asking price</th>
          </tr>
        </thead>
        <tbody>
          {houses.map((house) => (
            <HouseItem key={house.id} house={house} />
          ))}
        </tbody>
      </table>
      <AddHouseItem onAdd={addHouse} />
    </>
  );
};

export { HouseList };

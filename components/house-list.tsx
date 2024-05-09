import { useState } from "react";
import { HouseItem } from "./house-item";

export interface House {
  id: number;
  address: string;
  country: string;
  price: number;
};

const houseArray: House[] = [
  {
    id: 1,
    address: "12 Valley of Kings, Geneva",
    country: "Switzerland",
    price: 900000,
  },
  {
    id: 2,
    address: "89 Road of Forks, Bern",
    country: "Switzerland",
    price: 500000,
  },
];

const HouseList = () => {
  const [houses, setHouses] = useState(houseArray);

  const addHouse = () => {
    setHouses([
      ...houses,
      {
        id: houses.length + 1,
        address: "32 Valley Way, New York",
        country: "USA",
        price: 1000000,
      },
    ])
  }

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
      <button className="btn btn-primary" onClick={addHouse}>
        Add
      </button>
    </>
  );
};

export { HouseList };

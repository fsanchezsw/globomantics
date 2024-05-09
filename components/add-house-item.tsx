import { House } from "./house-list";

type Props = {
  onAdd: (newHouse: House) => void
};

const AddHouseItem = ({ onAdd }: Props) => {
  const addHouse = async () => {
    const body = JSON.stringify({
      address: "32 Valley Way, New York",
      country: "USA",
      price: 1000000,
    });

    const response = await fetch("/api/houses", { method: "POST", body });
    const newHouse = await response.json();

    onAdd(newHouse);
  };

  return (
    <button className="btn btn-primary" onClick={addHouse}>
      Add
    </button>
  );
};

export { AddHouseItem };

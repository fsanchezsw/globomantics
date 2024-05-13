import { useHouses } from "@/hooks/use-houses";
import { AddHouseItem } from "./add-house-item";
import { HouseItem } from "./house-item";
import { LoadingIndicator } from "./loading-indicator";

export interface IHouse {
  id: number;
  address: string;
  country: string;
  description: string;
  price: number;
  photo?: string;
};

export enum LoadingState {
  Loaded = "loaded",
  Loading = "loading",
  Error = "error"
};

type Props = {
  selectHouse: (house: IHouse) => void;
};

const HouseList = ({ selectHouse }: Props) => {
  const { houses, setHouses, loadingState } = useHouses();

  if (loadingState !== LoadingState.Loaded) {
    return <LoadingIndicator />;
  }

  const addHouse = (newHouse: IHouse) => {
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
            <HouseItem key={house.id} house={house} selectHouse={selectHouse} />
          ))}
        </tbody>
      </table>
      <AddHouseItem onAdd={addHouse} />
    </>
  );
};

export { HouseList };

import { currencyFormatter } from "@/helpers/currency-formatter";
import { IHouse } from "./house-list";

type Props = {
  house: IHouse;
  selectHouse: (house: IHouse) => void;
};

const HouseItem = ({ house, selectHouse }: Props) => {
  return (
    <tr onClick={() => selectHouse(house)}>
      <td>{house.address}</td>
      <td>{house.country}</td>
      <td>{currencyFormatter.format(house.price)}</td>
    </tr>
  );
};

export { HouseItem };

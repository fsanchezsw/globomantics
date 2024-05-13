import { currencyFormatter } from "@/helpers/currency-formatter";
import { IHouse } from "./house-list";
import { useContext } from "react";
import { NavigationValues, navigationContext } from "./app";

type Props = {
  house: IHouse;
};

const HouseItem = ({ house }: Props) => {
  const { navigate } = useContext(navigationContext);

  return (
    <tr onClick={() => navigate(NavigationValues.House, { house })}>
      <td>{house.address}</td>
      <td>{house.country}</td>
      <td>{currencyFormatter.format(house.price)}</td>
    </tr>
  );
};

export { HouseItem };

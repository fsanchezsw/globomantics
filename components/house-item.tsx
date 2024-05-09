import { currencyFormatter } from "@/helpers/currency-formatter";

import { House } from "./house-list";

type Props = {
  house: House;
};

const HouseItem = ({ house }: Props) => {
  return (
    <tr>
      <td>{house.address}</td>
      <td>{house.country}</td>
      <td>{currencyFormatter.format(house.price)}</td>
    </tr>
  );
};

export { HouseItem };

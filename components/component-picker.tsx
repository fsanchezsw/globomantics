import { NavigationValues } from "./app";
import { House } from "./house";
import { HouseList } from "./house-list";

type Props = {
  currentNavigationLocation: string;
};

const ComponentPicker = ({ currentNavigationLocation }: Props) => {
  switch (currentNavigationLocation) {
    case NavigationValues.Home:
      return <HouseList />;
    case NavigationValues.House:
      return <House />;
    default:
      return (
        <h3>
          No component for navigation value
          {currentNavigationLocation} found
        </h3>
      );
  }
};

export { ComponentPicker };

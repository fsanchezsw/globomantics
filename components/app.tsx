import { createContext, useCallback, useState } from "react";
import { Banner } from "./banner";
import { ComponentPicker } from "./component-picker";
import { IHouse } from "./house-list";

interface NavigationState {
  current: NavigationValues;
  params?: { [key: string]: IHouse };
  navigate: (value: NavigationValues, params?: { [key: string]: IHouse }) => void
};

export enum NavigationValues {
  Home = "Home",
  House = "House"
};

/** This navigation approach is just to learn how React context works, for real scenarios use NextJS or React router implementations */
export const navigationContext = createContext<NavigationState>({
  current: NavigationValues.Home,
  navigate: () => {}
});

const App = () => {
  const navigate: NavigationState['navigate'] = useCallback(
    (value, params) => setNavigation({ current: value, params, navigate }),
    []
  );

  const [navigation, setNavigation] = useState<NavigationState>({ current: NavigationValues.Home, navigate });

  return (
    <navigationContext.Provider value={navigation}>
      <Banner>
        Providing houses all over the world
      </Banner>
      <ComponentPicker currentNavigationLocation={navigation.current} />
    </navigationContext.Provider>
  );
};

export { App };

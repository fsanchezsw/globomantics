import { useState } from "react";
import { Banner } from "./banner";
import { House } from "./house";
import { HouseList, IHouse } from "./house-list";

const App = () => {
  const [selectedHouse, setSelectedHouse] = useState<IHouse>();

  return (
    <>
      <Banner>
        Providing houses all over the world
      </Banner>
      {selectedHouse ? <House house={selectedHouse} /> : <HouseList selectHouse={setSelectedHouse} />}
    </>
  );
};

export { App };

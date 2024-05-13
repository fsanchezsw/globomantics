import { useContext } from "react";
import { currencyFormatter } from "@/helpers/currency-formatter";
import { defaultPhoto } from "@/helpers/default-house-photo";
import { navigationContext } from "./app";
import { Bids } from "./bids";
import { IHouse } from "./house-list";

const House = () => {
  const { params } = useContext(navigationContext);
  const house = params?.house as IHouse; // Ensuring a parameter `house` is coming when House component is rendered

  const houseImgSrc = house.photo ? `./house-images/${house.photo}.jpeg` : defaultPhoto;

  return (
    <div className="row">
      <div className="col-6">
        <div className="row">
          <img className="img-fluid" src={houseImgSrc} alt="House pic" />
        </div>
      </div>
      <div className="col-6">
        <div className="row mt-2">
          <h5 className="col-12">{house.country}</h5>
        </div>
        <div className="row">
          <h3 className="col-12">{house.address}</h3>
        </div>
        <div className="row">
          <h2 className="theme-font-color col-12">
            {currencyFormatter.format(house.price)}
          </h2>
        </div>
        <div className="row">
          <div className="col-12 mt-3">{house.description}</div>
        </div>
        <Bids house={house}></Bids>
      </div>
    </div>
  );
};

export { House };

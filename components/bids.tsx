import { useState } from "react";
import { currencyFormatter } from "@/helpers/currency-formatter";
import { useBids } from "@/hooks/use-bids";
import { IHouse, LoadingState } from "./house-list";
import { LoadingIndicator } from "./loading-indicator";

export interface IBid {
  id?: number;
  houseId: number;
  bidder: string;
  amount: number;
};

type Props = {
  house: IHouse;
};

const Bids = ({ house }: Props) => {
  const { bids, loadingState, addBid } = useBids(house.id);

  const emptyBid: IBid = {
    houseId: house.id,
    bidder: "",
    amount: 0,
  };

  const [newBid, setNewBid] = useState(emptyBid);

  if (loadingState !== LoadingState.Loaded) {
    return <LoadingIndicator />;
  }

  const onBidSubmitClick = () => {
    addBid(newBid);
    setNewBid(emptyBid);
  };

  return (
    <>
      <div className="row mt-4">
        <div className="col-12">
          <table className="table table-sm">
            <thead>
              <tr>
                <th>Bidder</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {bids.map((bid) => (
                <tr key={bid.id}>
                  <td>{bid.bidder}</td>
                  <td>{currencyFormatter.format(bid.amount)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="row">
        <div className="col-5">
          <input
            id="bidder"
            className="h-100"
            type="text"
            value={newBid.bidder}
            onChange={(event) => setNewBid({ ...newBid, bidder: event.target.value })}
            placeholder="Bidder"
          ></input>
        </div>
        <div className="col-5">
          <input
            id="amount"
            className="h-100"
            type="number"
            value={newBid.amount}
            onChange={(event) =>
              setNewBid({ ...newBid, amount: parseInt(event.target.value) })
            }
            placeholder="Amount"
          ></input>
        </div>
        <div className="col-2">
          <button className="btn btn-primary" onClick={onBidSubmitClick}>
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export { Bids };

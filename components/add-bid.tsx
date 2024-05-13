import { useState } from "react";
import { IBid } from "./bid-list";

type Props = {
  houseId: number;
  onAdd: (newBid: IBid) => void;
};

const AddBid = ({ houseId, onAdd }: Props) => {
  const emptyBid: IBid = {
    houseId,
    bidder: "",
    amount: 0,
  };

  const [newBid, setNewBid] = useState(emptyBid);

  const onBidSubmitClick = () => {
    setNewBid(emptyBid);
    onAdd(newBid);
  };

  return (
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
  );
};

export { AddBid };

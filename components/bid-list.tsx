import { currencyFormatter } from "@/helpers/currency-formatter";
import { useBids } from "@/hooks/use-bids";
import { AddBid } from "./add-bid";
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

const BidList = ({ house }: Props) => {
  const { bids, loadingState, addBid } = useBids(house.id);

  if (loadingState !== LoadingState.Loaded) {
    return <LoadingIndicator />;
  }

  const addNewBid = (bid: IBid) => {
    addBid(bid);
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
      <AddBid houseId={house.id} onAdd={addNewBid} />
    </>
  );
};

export { BidList };

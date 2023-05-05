import React, { useContext } from "react";
import { DataContext } from "../../context/dataProvider";
import { useNavigate } from "react-router-dom";

function CoinPage() {
  const { fetchData } = useContext(DataContext);
  const navigate = useNavigate();
  console.log(fetchData);

  return (
    <div className="px-[40px] md:px-0 mt-[20px]">
      <div className="">
        <div className="flex justify-between items-center font-bold bg-darky-col rounded-md text-white shadow-md px-2 py-[15px] mb-5">
          <p>#</p>
          <p>Coin</p>
          <p>Price</p>
          <p>24h</p>
          <p className="sm:hidden">Volume</p>
          <p className="sm:hidden">MktCap</p>
        </div>
        <div className="[&>*:nth-child(odd)]:bg-slate-100 text-light-col">
          {fetchData?.map((coin, index) => (
            <div
              onClick={() => navigate(`/coins/${coin?.id}`)}
              key={index}
              className="flex justify-between items-center cursor-pointer py-[8px] mb-3 shadow-md px-2"
            >
              <p className="mr-8">{coin?.market_cap_rank}</p>
              <div className="flex items-center gap-2 mr-5">
                <img src={coin?.image} alt="" className="w-[30px] h-[30px]" />
                <p className="">{coin?.symbol.toUpperCase()}</p>
              </div>
              <p className="ml-5">${coin?.current_price.toLocaleString()}</p>
              <p className="ml-10">
                {coin?.price_change_percentage_24h.toFixed(2)}%
              </p>
              <p className="sm:hidden">
                ${coin?.total_volume.toLocaleString()}
              </p>
              <p className="sm:hidden">${coin?.market_cap.toLocaleString()}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CoinPage;

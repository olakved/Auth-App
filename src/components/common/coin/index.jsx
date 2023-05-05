import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getRequest } from "../../../utils/apiCalls";
import { useQuery } from "@tanstack/react-query";
import logo from "../../../assets/logo.png";
import DOMPurify from "dompurify";

function CoinDetails() {
  const { id } = useParams();
  const coinId = id;
  const navigate = useNavigate();

  console.log(coinId);

  const { data, isLoading, isError } = useQuery(["coin"], () =>
    getRequest({
      url: `https://api.coingecko.com/api/v3/coins/${id}`,
    })
  );

  const coinData = data?.data;
  console.log(coinData);
  // console.log(data);

  return (
    <div className="py-[20px] md:py-[30px] px-[30px] md:px-[10px]">
      <div className="flex justify-between mb-[20px] items-center">
        <p
          onClick={() => navigate(-1)}
          className="px-[10px] bg-light-col hover:bg-darky-col text-white cursor-pointer"
        >
          Back
        </p>
        <div className="flex items-center gap-2 font-bold">
          <img src={logo} alt="" className="w-[30px] h-[30px]" />
          <p className="text-[20px]">Auth</p>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-[700px] sm:w-full shadow-md">
          <div className="w-full py-[15px] bg-darky-col shadow-md text-center font-bold text-white text-[40px] mb-[15px]">
            <p>{coinData?.name}</p>
          </div>
          <div className="flex flex-col gap-4 shadow-md p-4 sm:p-1 mb-[15px]">
            <div className="w-[120px] sm:w-[90px] sm:text-[12px]">
              <p className=" bg-light-col rounded-lg shadow-md text-center text-white px-[10px] py-[2px]">
                Rank # {coinData?.market_cap_rank}
              </p>
            </div>
            <div className="flex justify-between items-center text-darky-col">
              <div className="flex justify-between items-center gap-2 font-bold sm:text-[14px]">
                {coinData?.image ? (
                  <img
                    src={coinData?.image?.small}
                    alt=""
                    className="w-[40px] h-[40px]"
                  />
                ) : null}
                <p>{coinData?.name}</p>
                {coinData?.symbol ? (
                  <p>{coinData?.symbol?.toUpperCase()}/USD</p>
                ) : null}
              </div>
              <div>
                {coinData?.market_data?.current_price ? (
                  <h1 className="font-bold text-[35px] sm:text-[20px]">
                    $
                    {coinData?.market_data?.current_price?.usd.toLocaleString()}
                  </h1>
                ) : null}
              </div>
            </div>
          </div>
          <div className="p-4 sm:p-1 shadow-md mb-[15px]">
            <div className="grid grid-cols-6 text-center sm:text-[14px] gap-[5px]  text-white font-bold mb-[5px]">
              <p className="p-[8px] sm:p-[2px] bg-darky-col ">1h</p>
              <p className="p-[8px] sm:p-[2px] bg-darky-col ">24h</p>
              <p className="p-[8px] sm:p-[2px] bg-darky-col ">7d</p>
              <p className="p-[8px] sm:p-[2px] bg-darky-col ">14d</p>
              <p className="p-[8px] sm:p-[2px] bg-darky-col ">3d</p>
              <p className="p-[8px] sm:p-[2px] bg-darky-col ">1yr</p>
            </div>
            <div className="grid grid-cols-6 text-center">
              <p>
                {coinData?.market_data
                  ?.price_change_percentage_1h_in_currency ? (
                  <p>
                    {coinData?.market_data.price_change_percentage_1h_in_currency.usd.toFixed(
                      1
                    )}
                    %
                  </p>
                ) : null}
              </p>
              <p>
                {coinData?.market_data
                  ?.price_change_percentage_24h_in_currency ? (
                  <p>
                    {coinData?.market_data.price_change_percentage_24h_in_currency.usd.toFixed(
                      1
                    )}
                    %
                  </p>
                ) : null}
              </p>
              <p>
                {coinData?.market_data
                  ?.price_change_percentage_24h_in_currency ? (
                  <p>
                    {coinData?.market_data.price_change_percentage_7d_in_currency.usd.toFixed(
                      1
                    )}
                    %
                  </p>
                ) : null}
              </p>
              <p>
                {coinData?.market_data
                  ?.price_change_percentage_24h_in_currency ? (
                  <p>
                    {coinData?.market_data.price_change_percentage_14d_in_currency.usd.toFixed(
                      1
                    )}
                    %
                  </p>
                ) : null}
              </p>
              <p>
                {coinData?.market_data
                  ?.price_change_percentage_24h_in_currency ? (
                  <p>
                    {coinData?.market_data.price_change_percentage_30d_in_currency.usd.toFixed(
                      1
                    )}
                    %
                  </p>
                ) : null}
              </p>
              <p>
                {coinData?.market_data
                  ?.price_change_percentage_24h_in_currency ? (
                  <p>
                    {coinData?.market_data.price_change_percentage_1y_in_currency.usd.toFixed(
                      1
                    )}
                    %
                  </p>
                ) : null}
              </p>
            </div>
          </div>
          <div className="p-4 sm:p-1 shadow-md">
            <div className="grid grid-cols-2 gap-4 sm:flex sm:flex-col sm:gap-[20px] text-darky-col">
              <div>
                <div className="flex justify-between border-b-2 px-1 py-2">
                  <p className="font-bold text-[16px] sm:text-[14px]">
                    24 Hour Low
                  </p>
                  <p className="font-semibold text-[14px]">
                    {coinData?.market_data?.low_24h ? (
                      <p>
                        ${coinData?.market_data.low_24h.usd.toLocaleString()}
                      </p>
                    ) : null}
                  </p>
                </div>
                <div className="flex justify-between border-b-2 px-1 py-2">
                  <p className="font-bold text-[16px] sm:text-[14px]">
                    24 Hour High
                  </p>
                  <p className="font-semibold text-[14px]">
                    {coinData?.market_data?.high_24h ? (
                      <p>
                        ${coinData?.market_data.high_24h.usd.toLocaleString()}
                      </p>
                    ) : null}
                  </p>
                </div>
              </div>
              <div>
                <div className="flex justify-between border-b-2 px-1 py-2">
                  <p className="font-bold text-[16px] sm:text-[14px]">
                    Market Cap
                  </p>
                  <p className="font-semibold text-[14px]">
                    {coinData?.market_data?.market_cap ? (
                      <p>
                        ${coinData?.market_data.market_cap.usd.toLocaleString()}
                      </p>
                    ) : null}
                  </p>
                </div>
                <div className="flex justify-between border-b-2 px-1 py-2">
                  <p className="font-bold text-[16px] sm:text-[14px]">
                    Circulating Supply
                  </p>
                  <p className="font-semibold text-[14px]">
                    {coinData?.market_data ? (
                      <p>{coinData?.market_data.circulating_supply}</p>
                    ) : null}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 sm:p-1 shadow-md mt-[15px]">
            <h3 className="font-bold text-[25px] mb-[10px] text-darky-col">
              About
            </h3>
            {/* <p className="sm:text-[14px]">
              {coinData?.description ? coinData?.description?.en : ""}
            </p> */}
            <p
              className="sm:text-[14px] leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  coinData?.description ? coinData?.description?.en : ""
                ),
              }}
            ></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoinDetails;

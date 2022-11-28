import Image from "next/image";
import React from "react";
import verified from "../assets/verified.png";

const CollectionCard = ({ rank, image, title, price }) => {
  return (
    <div className="flex space-x-4 items-center justify-between">
      <div className="flex items-center space-x-4">
        <p className="font-bold text-gray-400">{rank}</p>
        <div className="flex">
          <Image src={image} className="w-14 h-14 rounded-[1rem]" alt="" />
        </div>
        <div className="">
          <div className="flex items-center object-cover">
            <p className="font-semibold">{title}</p>
            <div className="">
              <Image src={verified} alt="" className="flex w-8" />
            </div>
          </div>

          <p className=" text-[13px] text-gray-400">
            Floor: <span className="font-semibold text-gray-500">0.19 ETH</span>
          </p>
        </div>
      </div>

      <p className="font-semibold">{price}</p>
    </div>
  );
};

export default CollectionCard;

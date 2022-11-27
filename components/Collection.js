import React from "react";
import rengoku from "../assets/rengoku.png";
import gauntlet from "../assets/gauntlet.png";
import meka from "../assets/meka.png";
import decayingmoon from "../assets/decayingmoon.png";
import undead from "../assets/undead.png";
import CollectionCard from "./CollectionCard";

const Collection = () => {
  const collections = [
    {
      rank: 1,
      image: rengoku,
      title: "Rengoku",
      price: "560 ETH",
    },
    {
      rank: 2,
      image: gauntlet,
      title: "Gauntlet",
      price: "98 ETH",
    },
    {
      rank: 3,
      image: decayingmoon,
      title: "Decaying Moon",
      price: "70 ETH",
    },
    {
      rank: 4,
      image: meka,
      title: "Meka",
      price: "47 ETH",
    },
    {
      rank: 5,
      image: undead,
      title: "Undead",
      price: "56 ETH",
    },
  ];

  return (
    <div className=" ">
      <div className="sm:mx-10 mt-4 lg:flex lg:justify-between lg:mx-auto lg:max-w-[85vw]">
        <div className="  w-full mr-12">
          <div className="">
            <p className="text-[12.5px] font-semibold text-gray-500">
              COLLECTION
            </p>
          </div>
          <div className="space-y-6 mt-4 w-full  ">
            {collections.map((collection) => (
              <CollectionCard
                key={collection}
                rank={collection.rank}
                image={collection.image}
                title={collection.title}
                price={collection.price}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;

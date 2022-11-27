import Image from "next/image";
import React from "react";
import Card from "./Card";
import TokyoGhoul from "../assets/tokyoghoul.png";
import Berserk from "../assets/guts.png";
import Hokage from "../assets/naruto.png";
import Uchiha from "../assets/sasuke.png";

const Explore = () => {
  const cards = [
    { title: "KEN KANEKI", image: TokyoGhoul },
    { title: "GUTS", image: Berserk },
    { title: "NARUTO", image: Hokage },
    { title: "SASUKE", image: Uchiha },
  ];

  return (
    <div className="flex flex-col justify-center mt-[5.5rem] sm:mx-10 md:mx-2">
      <div className="mx-4">
        <p className="font-bold text-[32px] lg:text-[40px]  text-center">
          Explore, collect, and sell NFTs
        </p>
      </div>
      <div className="sm:flex sm:space-x-[1.2rem] md:space-x-[1rem] mx-auto">
        <Card image={TokyoGhoul} title="KEN KANEKI" className=" " />

        <div className="hidden sm:inline-flex">
          <Card image={Berserk} title="GUTS" className="" />
        </div>

        <div className=" hidden md:inline-flex">
          <Card image={Hokage} title="NARUTO" className=" " />
        </div>

        <div className="hidden lg:inline-flex">
          <Card image={Uchiha} title="SASUKE" />
        </div>
      </div>
    </div>
  );
};

export default Explore;

import Image from "next/image";
import React from "react";
import NotableCard from "./NotableCard";
import yugi from "../assets/yugi.png";
import yy from "../assets/YY.png";
import valhalla from "../assets/valhalla.png";
import creepz from "../assets/creepz.png";
import cover1 from "../assets/cover1.png";
import cover2 from "../assets/cover2.png";

const Notables = () => {
  return (
    <div className="mx-7 sm:mx-10 mt-5 text-gray-600">
      <p className="font-semibold">Notable Collections</p>
      <div className="mt-8 sm:flex space-x-4">
        <div className="w-full">
          <NotableCard image={yugi} title="YuGiYn" profile={yy} key={yugi} />
        </div>
        <div className="hidden sm:inline-flex w-full">
          <NotableCard
            image={valhalla}
            title="Valhalla"
            profile={cover1}
            key={valhalla}
            className="w-full"
          />
        </div>
        <div className="hidden lg:inline-flex w-full">
          <NotableCard
            image={creepz}
            title="Creepz"
            profile={cover2}
            key={creepz}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Notables;

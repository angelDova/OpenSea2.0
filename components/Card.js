import Image from "next/image";
import React from "react";

const Card = ({ image, title }) => {
  return (
    <div>
      <div className="flex overflow-hidden mt-6 rounded-[1rem] relative h-[30rem] max-h-[30rem] w-[90vw] sm:w-[42vw] md:w-[30vw] sm:h-[16rem]  md:h-[14.4rem] lg:h-[14.4rem] lg:w-[23vw] xl:h-[18.5rem] xl:w-[23vw] z-20 text-white group 1xl:h-[20rem] 1xl:w-[23vw] ">
        <div className="flex flex-col justify-end p-4 font-semibold z-20">
          <p className="  ">{title}</p>
          <p className="">Floor 0.06 ETH</p>
        </div>

        <Image
          src={image}
          className="absolute rounded-[1rem] group-hover:scale-110  duration-200 ease-out z-10"
          alt=""
        />
      </div>
    </div>
  );
};

export default Card;

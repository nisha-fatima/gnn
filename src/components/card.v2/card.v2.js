import React from "react";
import clsx from "clsx";
import playButton from "../../assets/image/playButton.png";
import { IsMobileWidth } from "../../utils/utils";

export default function CardV2(props) {
  const {
    badge,
    sideBadge,
    image,
    heading,
    smallText,
  } = props;
  const mobileWidth = IsMobileWidth()

  return (
    <div
      className={clsx(
        "p-3 rounded-md bg-black-50 max-w-[480px]",
        mobileWidth && "min-h-[500px] max-h-[500px]",
        !mobileWidth && "min-h-[480px] max-h-[480px]"
      )}
    >
      <div className=" flex justify-between">
        <p className="bg-green-50 p-1 pl-3 pr-3 w-24 text-white text-sm rounded-full font-bold">
          {badge}
        </p>
        <p className="text-sm text-white">{sideBadge}</p>
      </div>
      <img
        src={image}
        alt={"GNN-Image"}
        className={clsx("w-full mt-2", mobileWidth && "h-60", !mobileWidth && "h-72")}
      />
      <div className="p-5">
        <h1
          className={clsx(
            "font-bold text-white text-lg leading-5"
          )}
        >
          {heading}
        </h1>
        <p className="text-white text-xs mt-3 font-semibold">{smallText}</p>
      </div>
    </div>
  );
}

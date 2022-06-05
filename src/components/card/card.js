import React from "react";
import clsx from "clsx";
import playButton from "../../assets/image/playButton.png";

export default function Card(props) {
  const { badge, image, heading, smallText, isBgBlack, isShowPlayButton, v2, v3, details } =
    props;
  return (
    <div
      className={clsx(
        "rounded-md",
        isBgBlack && "bg-black-50",
        !isBgBlack && "bg-white",
        details && v2 && "min-h-[420px] max-h-[420px] max-w-[239px]",
        !details && v2 && "min-h-[362px] max-h-[362px] max-w-[239px]",
        !details && !v2 && !v3 && "min-h-[540px] max-h-[540px] max-w-[360px]",
        v3 && "min-h-[480px] max-h-[480px] max-w-[318px]"
      )}
    >
      <img src={image} alt={"GNN-Image"}
      className={clsx("w-full", v2 && "h-60")}
      />
      <div className="p-5">
        {badge && (
          <p className="bg-green-50 p-1 pl-3 pr-3 w-24 text-white text-sm rounded-full relative bottom-10">
            {badge}
          </p>
        )}
        {isShowPlayButton && (
          <img src={playButton} alt="playButton" className="w-8 h-8 mb-2" />
        )}
        <h1
          className={clsx(
            "font-bold ",
            isBgBlack && "text-white",
            !isBgBlack && "text-black-50",
            v2 && "text-2lg leading-5",
            !v2 && "text-xl leading-6"
          )}
        >
          {heading}
        </h1>
        {
          details && 
          <h1
          className={clsx(
            "font-semibold mt-2",
            isBgBlack && "text-white",
            !isBgBlack && "text-black-50",
            v2 && "text-sm leading-4",
            !v2 && "text-sm leading-4"
          )}
        >
          {details}
        </h1>
        }
        <p className="text-green-50 text-xs mt-3 font-semibold">{smallText}</p>
      </div>
    </div>
  );
}

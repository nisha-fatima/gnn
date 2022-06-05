import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Card from "../card/card";
import cardImage1 from "../../assets/image/cardImage1.png";
import cardImage2 from "../../assets/image/cardImage2.png";
import cardImage3 from "../../assets/image/cardImage3.png";
import cardImage4 from "../../assets/image/cardImage4.png";
import { IsMobileWidth } from "../../utils/utils";


import { Pagination } from "swiper";
import clsx from "clsx";

export default function Swipper() {
  const mobileWidth = IsMobileWidth()
  const slides = [
    [
      {
        badge: "Actu GNN",
        image: cardImage1,
        heading:
          "Réformes économiques et financières : la Cemac veut redoubler d’efforts ,lf,df dlld",
        smallText: "20 avril 2022 à 19h34min",
      },
      {
        badge: "Social Actu",
        image: cardImage2,
        heading:
          "Réformes économiques et financières : la Cemac veut redoubler d’efforts ,lf,df dlld",
        smallText: "20 avril 2022 à 19h34min",
      },
      {
        badge: "Actu GNN",
        image: cardImage3,
        heading:
          "Réformes économiques et financières : la Cemac veut redoubler d’efforts ,lf,df dlld",
        smallText: "20 avril 2022 à 19h34min",
      },
      {
        isBgBlack: true,
        isShowPlayButton: true,
        image: cardImage4,
        heading:
          "Entretien avec Mr Carl MASSALA l’Entrepreneur du Saint-Esprit",
        smallText: "20 avril 2022 à 19h34min",
      },
    ],
    [
      { name: "test 5" },
      { name: "test 6" },
      { name: "test 7" },
      { name: "test 8" },
    ],
    [
      { name: "test 9" },
      { name: "test 10" },
      { name: "test 11" },
      { name: "test 12" },
    ],
    [
      { name: "test 13" },
      { name: "test 14" },
      { name: "test 15" },
      { name: "test 16" },
    ],
  ];
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        {slides.map((data, index) => (
          <SwiperSlide key={index}>
            <div className={clsx("h-full flex justify-around items-center", mobileWidth && "flex-col")}>
              {data.map((detail, indexDetails) => (
                <div className={clsx("m-1 pb-10", mobileWidth && "w-full flex justify-center", !mobileWidth && "w-3/12")}>
                  <Card
                  {...detail}
                  />
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

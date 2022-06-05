import React from "react";
import adver1 from "../assets/image/adver1.png";
import adver2 from "../assets/image/adver2.png";
import adver3 from "../assets/image/adver3.png";
import banner1 from "../assets/image/banner1.png";
import banner2 from "../assets/image/banner2.png";
import banner3 from "../assets/image/banner3.png";
import Card from "../components/card/card";
import homeImage1 from "../assets/image/homeImage1.png";
import cardImage5 from "../assets/image/cardImage5.png";
import cardImage6 from "../assets/image/cardImage6.png";
import cardImage7 from "../assets/image/cardImage7.png";
import cardImage8 from "../assets/image/cardImage8.png";
import cardImage9 from "../assets/image/cardImage9.png";
import cardImage10 from "../assets/image/cardImage10.png";
import cardImage11 from "../assets/image/cardImage11.png";
import cardImage12 from "../assets/image/cardImage12.png";
import cardImage13 from "../assets/image/cardImage13.png";
import cardImage14 from "../assets/image/cardImage14.png";
import cardImage15 from "../assets/image/cardImage15.png";
import cardImage16 from "../assets/image/cardImage16.png";
import CardV2 from "../components/card.v2/card.v2";
import { IsMobileWidth, IsTabletWidth } from "../utils/utils";
import clsx from "clsx";

export default function Homepage() {
  const mobileWidth = IsMobileWidth();
  const tabletWidth = IsTabletWidth();

  const sideAdsData = [
    adver1,
    adver2,
    adver3,
    adver1,
    adver2,
    adver3,
    adver1,
    adver2,
    adver3,
    adver1,
    adver2,
  ];

  const firstCardRow = [
    {
      image: homeImage1,
      heading:
        "Réformes économiques et financières : la Cemac veut redoubler d’efforts",
      smallText: "20 avril 2022 à 19h34min",
    },
    {
      image: cardImage5,
      heading:
        "Réformes économiques et financières : la Cemac veut redoubler d’efforts",
      smallText: "20 avril 2022 à 19h34min",
    },
    {
      image: cardImage6,
      heading:
        "Réformes économiques et financières : la Cemac veut redoubler d’efforts",
      smallText: "20 avril 2022 à 19h34min",
    },
    {
      image: cardImage7,
      heading:
        "Réformes économiques et financières : la Cemac veut redoubler d’efforts",
      smallText: "20 avril 2022 à 19h34min",
    },
    {
      image: cardImage8,
      heading:
        "Réformes économiques et financières : la Cemac veut redoubler d’efforts",
      smallText: "20 avril 2022 à 19h34min",
    },
    {
      image: cardImage9,
      heading:
        "Réformes économiques et financières : la Cemac veut redoubler d’efforts",
      smallText: "20 avril 2022 à 19h34min",
    },
    {
      image: cardImage10,
      heading:
        "Réformes économiques et financières : la Cemac veut redoubler d’efforts",
      smallText: "20 avril 2022 à 19h34min",
    },
    {
      image: cardImage11,
      heading:
        "Réformes économiques et financières : la Cemac veut redoubler d’efforts",
      smallText: "20 avril 2022 à 19h34min",
    },
  ];

  const secondCardRow = [
    {
      image: cardImage12,
      heading:
        "Réformes économiques et financières : la Cemac veut redoubler d’efforts",
      smallText: "20 avril 2022 à 19h34min",
      details:
        "Cʼest par le biais dʼun communiqué diffusé sur son site que le Festival panafricain du",
    },
    {
      image: cardImage13,
      heading:
        "Réformes économiques et financières : la Cemac veut redoubler d’efforts",
      smallText: "20 avril 2022 à 19h34min",
      details:
        "Cʼest par le biais dʼun communiqué diffusé sur son site que le Festival panafricain du",
    },
    {
      image: cardImage14,
      heading:
        "Réformes économiques et financières : la Cemac veut redoubler d’efforts",
      smallText: "20 avril 2022 à 19h34min",
      details:
        "Cʼest par le biais dʼun communiqué diffusé sur son site que le Festival panafricain du",
    },
    {
      image: cardImage15,
      heading:
        "Réformes économiques et financières : la Cemac veut redoubler d’efforts",
      smallText: "20 avril 2022 à 19h34min",
      details:
        "Cʼest par le biais dʼun communiqué diffusé sur son site que le Festival panafricain du",
    },
  ];

  const thirdCardRow = [
    {
      image: homeImage1,
      heading:
        "Réformes économiques et financières : la Cemac veut redoubler d’efforts",
      smallText: "20 avril 2022 à 19h34min",
      details:
        "Cʼest par le biais dʼun communiqué diffusé sur son site que le Festival panafricain du",
      isBgBlack: true,
    },
    {
      image: cardImage5,
      heading:
        "Réformes économiques et financières : la Cemac veut redoubler d’efforts",
      smallText: "20 avril 2022 à 19h34min",
      details:
        "Cʼest par le biais dʼun communiqué diffusé sur son site que le Festival panafricain du",
      isBgBlack: true,
    },
    {
      image: cardImage6,
      heading:
        "Réformes économiques et financières : la Cemac veut redoubler d’efforts",
      smallText: "20 avril 2022 à 19h34min",
      details:
        "Cʼest par le biais dʼun communiqué diffusé sur son site que le Festival panafricain du",
      isBgBlack: true,
    },
    {
      image: cardImage7,
      heading:
        "Réformes économiques et financières : la Cemac veut redoubler d’efforts",
      smallText: "20 avril 2022 à 19h34min",
      details:
        "Cʼest par le biais dʼun communiqué diffusé sur son site que le Festival panafricain du",
      isBgBlack: true,
    },
  ];

  const fourthCardRow = [
    {
      image: homeImage1,
      heading:
        "Réformes économiques et financières : la Cemac veut redoubler d’efforts",
      smallText: "20 avril 2022 à 19h34min",
      details:
        "Cʼest par le biais dʼun communiqué diffusé sur son site que le Festival panafricain du",
    },
    {
      image: cardImage5,
      heading:
        "Réformes économiques et financières : la Cemac veut redoubler d’efforts",
      smallText: "20 avril 2022 à 19h34min",
      details:
        "Cʼest par le biais dʼun communiqué diffusé sur son site que le Festival panafricain du",
    },
    {
      image: cardImage6,
      heading:
        "Réformes économiques et financières : la Cemac veut redoubler d’efforts",
      smallText: "20 avril 2022 à 19h34min",
      details:
        "Cʼest par le biais dʼun communiqué diffusé sur son site que le Festival panafricain du",
    },
    {
      image: cardImage7,
      heading:
        "Réformes économiques et financières : la Cemac veut redoubler d’efforts",
      smallText: "20 avril 2022 à 19h34min",
      details:
        "Cʼest par le biais dʼun communiqué diffusé sur son site que le Festival panafricain du",
    },
  ];

  const fifthCardRow = [
    {
      image: homeImage1,
      heading:
        "Réformes économiques et financières : la Cemac veut redoubler d’efforts",
      smallText: "20 avril 2022 à 19h34min",
    },
    {
      image: cardImage5,
      heading:
        "Réformes économiques et financières : la Cemac veut redoubler d’efforts",
      smallText: "20 avril 2022 à 19h34min",
    },
    {
      image: cardImage6,
      heading:
        "Réformes économiques et financières : la Cemac veut redoubler d’efforts",
      smallText: "20 avril 2022 à 19h34min",
    },
  ];

  const sixthCardRow = [
    {
      image: cardImage16,
      heading:
        "Réformes économiques et financières : la Cemac veut redoubler d’efforts fjdfld, dfmlsdkjfps; smsllù^d ls,lsfmf;dmdfm;dmg;dmg;dm dmgdkgpmdgmdlgù dmfdk",
      smallText: "20 avril 2022 à 19h34min",
      badge: "Lifestyle",
      sideBadge: "Autres articles",
    },
    {
      image: cardImage16,
      heading:
        "Réformes économiques et financières : la Cemac veut redoubler d’efforts fjdfld, dfmlsdkjfps; smsllù^d ls,lsfmf;dmdfm;dmg;dmg;dm dmgdkgpmdgmdlgù dmfdk",
      smallText: "20 avril 2022 à 19h34min",
      badge: "Tendance",
      sideBadge: "Autres articles",
    },
  ];
  return (
    <div className="flex">
      <div
        className={clsx(
          mobileWidth && !tabletWidth && "w-full",
          (!mobileWidth || tabletWidth) && "w-8/12"
        )}
      >
        <div className="w-full flex justify-center">
          <img alt="banner1" src={banner1} />
        </div>
        <div className="bg-white p-3 mt-4 rounded-md">
          <div className="flex justify-between">
            <p className="bg-green-50 p-1 pl-3 pr-3 w-24 text-white text-sm rounded-full font-bold">
              Actu GNN
            </p>
            <p className="text-green-50 text-sm font-medium">Autres articles</p>
          </div>
          <div className="mt-4 flex flex-wrap justify-around">
            {firstCardRow.map((data, index) => (
              <div key={index} className={clsx(mobileWidth && "mb-4")}>
                <Card v2 {...data} />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-3 mt-4 rounded-md">
          <div className="flex justify-between">
            <p className="bg-green-50 p-1 pl-3 pr-3 w-24 text-white text-sm rounded-full font-bold">
              Politique
            </p>
            <p className="text-green-50 text-sm font-medium">Autres articles</p>
          </div>
          <div className="mt-4 flex flex-wrap justify-around">
            {secondCardRow.map((data, index) => (
              <div key={index} className={clsx(mobileWidth && "mb-4")}>
                <Card v2 {...data} />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-black-50 p-3 mt-4 rounded-md">
          <div className="flex justify-between">
            <p className="bg-white p-1 pl-3 pr-3 w-28 text-green-50 text-sm rounded-full font-bold">
              Social Actu
            </p>
            <p className="text-white text-sm font-normal">Autres articles</p>
          </div>
          <div className="mt-4 flex flex-wrap justify-around">
            {thirdCardRow.map((data, index) => (
              <div key={index} className={clsx(mobileWidth && "mb-4")}>
                <Card v2 {...data} />
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex justify-center mt-4">
          <img alt="banner2" src={banner2} />
        </div>

        <div className="bg-white p-3 mt-4 rounded-md">
          <div className="flex justify-between">
            <p className="bg-green-50 p-1 pl-3 pr-3 w-28 text-white text-sm rounded-full font-bold">
              Sport GNN
            </p>
            <p className="text-green-50 text-sm font-medium">Autres articles</p>
          </div>
          <div className="mt-4 flex flex-wrap justify-around">
            {fourthCardRow.map((data, index) => (
              <div key={index} className={clsx(mobileWidth && "mb-4")}>
                <Card v2 {...data} />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-3 mt-4 rounded-md">
          <div className="flex justify-between">
            <p className="bg-green-50 p-1 pl-3 pr-3 w-28 text-white text-sm rounded-full font-bold">
              Faits divers
            </p>
            <p className="text-green-50 text-sm font-medium">Autres articles</p>
          </div>
          <div className="mt-4 flex flex-wrap justify-around">
            {fourthCardRow.map((data, index) => (
              <div key={index} className={clsx(mobileWidth && "mb-4")}>
                <Card v2 {...data} />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-black-50 p-3 mt-4 rounded-md">
          <div className="flex justify-between">
            <p className="bg-white p-1 pl-3 pr-3 w-28 text-green-50 text-sm rounded-full font-bold">
              Info Culture
            </p>
            <p className="text-white text-sm font-normal">Autres articles</p>
          </div>
          <div className="mt-4 flex flex-wrap justify-around">
            {thirdCardRow.map((data, index) => (
              <div key={index} className={clsx(mobileWidth && "mb-4")}>
                <Card v2 {...data} />
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex justify-center mt-4">
          <img alt="banner3" src={banner3} />
        </div>

        <div className="bg-white p-3 mt-4 rounded-md">
          <div className="flex justify-between">
            <p className="bg-green-50 p-1 pl-3 pr-3 w-28 text-white text-sm rounded-full font-bold">
              Personnage
            </p>
            <p className="text-green-50 text-sm font-medium">Autres articles</p>
          </div>
          <div className="mt-4 flex flex-wrap justify-around">
            {fifthCardRow.map((data, index) => (
              <div key={index} className={clsx(mobileWidth && "mb-4")}>
                <Card v3 {...data} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 flex flex-wrap justify-around">
          {sixthCardRow.map((data, index) => (
            <div key={index} className={clsx(mobileWidth && "mb-2")}>
              <CardV2 {...data} />
            </div>
          ))}
        </div>
      </div>

      {(!mobileWidth || tabletWidth) && (
        <div className="w-4/12 ml-4">
          <div className="flex flex-col items-center w-full ">
            {sideAdsData.map((image, index) => (
              <img className="mb-4" src={image} alt={`adver ${index + 1}`} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

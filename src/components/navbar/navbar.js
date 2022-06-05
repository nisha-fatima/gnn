import React from "react";
import facebook from "../../assets/image/facebook.png";
import twitter from "../../assets/image/twitter.png";
import linkdin from "../../assets/image/linkdin.png";
import logo from "../../assets/image/logo.png";
import Politique from "../../assets/image/Politique.png";
import SportGNN from "../../assets/image/SportGNN.png";
import Magazine from "../../assets/image/Magazine.png";
import Search from "../../assets/image/Search.png";
import clsx from "clsx";
import { IsMobileWidth } from "../../utils/utils";

export default function Navbar() {
  const mobileWidth = IsMobileWidth();
  return (
    <>
      <div className="bg-black-50 w-full h-10 flex justify-between items-center pl-4 pr-4">
        <div className="text-white">Vendredi, 2 Avril 2022</div>
        <div className="flex items-center">
          <img src={facebook} className="w-4 h-4" />
          <img src={twitter} className="ml-2 w-4 h-4" />
          <img src={linkdin} className="ml-2 w-4 h-4" />
          <div className="text-white ml-2"> │ Compte</div>
        </div>
      </div>
      <div
        className={clsx(
          "w-full flex  items-center pl-7 pr-7",
          mobileWidth && "p-2 flex-col",
          !mobileWidth && "h-24 justify-between"
        )}
      >
        <img src={logo} className="w-52" />
        <div
          className={clsx(
            "flex justify-center items-center",
            mobileWidth && "flex-col"
          )}
        >
          <img src={Politique} className="w-7 h-7" />
          <div className="text-green-50 font-medium text-2xl ml-2">
            Politique
          </div>
          {!mobileWidth && (
            <div className="text-black ml-2 w-0.5 h-12 bg-black-50"></div>
          )}
          <img
            src={SportGNN}
            className={clsx("ml-2 w-7 h-7", mobileWidth && "mb-2")}
          />
          <div className="text-green-50 font-medium text-2xl ml-2">
            Sport GNN
          </div>
          {!mobileWidth && (
            <div className="text-black ml-2 w-0.5 h-12 bg-black-50"></div>
          )}
          <img
            src={Magazine}
            className={clsx("ml-2 w-7 h-7", mobileWidth && "mb-2")}
          />
          <div className="text-green-50 font-medium text-2xl ml-2">
            Magazine
          </div>
        </div>
        <div className="text-black ml-2 flex items-center">
          {!mobileWidth && (
            <div className="text-black ml-2 w-0.5 h-12 bg-black-50 mr-4"></div>
          )}
          <img
            className={clsx("w-6 h-6", mobileWidth && "mt-2")}
            src={Search}
            alt="search"
          />
        </div>
      </div>
      <div className="bg-white w-full flex justify-center">
        <div
          className={clsx(
            "text-green-50 font-bold flex",
            mobileWidth && "w-full p-1 justify-center flex-col items-center",
            !mobileWidth && "w-8/12 justify-around"
          )}
        >
          <h3>Actu GNN</h3>
          <h3>Politique</h3>
          <h3>Social Actu </h3>
          <h3>Sport GNN</h3>
          <h3>Faits divers</h3>
          <h3>Info Culture </h3>
          <h3>Personnage</h3>
          <h3>Lifestyle</h3>
          <h3>Tendance</h3>
        </div>
      </div>
    </>
  );
}

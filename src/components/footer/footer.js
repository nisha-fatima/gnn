import React from "react";
import logo1 from "../../assets/image/logo1.png";
import facebook from "../../assets/image/facebook.png";
import twitter from "../../assets/image/twitter.png";
import linkdin from "../../assets/image/linkdin.png";
import phone from "../../assets/image/phone.png";
import message from "../../assets/image/message.png";
import { IsMobileWidth } from "../../utils/utils";
import clsx from "clsx";

export default function Footer() {
  const mobileWidth = IsMobileWidth();
  return (
    <div
      className={clsx(
        "bg-black-50 mt-4 w-full p-4 justify-between flex text-white",
        mobileWidth && "flex-col",
        !mobileWidth && "h-64"
      )}
    >
      <div
        className={clsx(
          "flex justify-center flex-col",
          mobileWidth && "items-center w-full",
          !mobileWidth && "w-3/12"
        )}
      >
        <img src={logo1} alt="logo" className="w-60 h-30" />
        <p className="text-xs mt-8">
          © Gabon Next News - Le perroquet National
        </p>
      </div>
      <div
        className={clsx(
          "flex justify-center flex-col",
          mobileWidth && "items-center w-full mt-2",
          !mobileWidth && "w-3/12"
        )}
      >
        <p className="text-xl">Contactez-nous</p>
        <div className="flex items-center">
          <div>
            <img className="w-6 h-6 mr-1 mb-2" src={phone} />
          </div>
          <div>
            <p className="text-sm">+241 62 95 50 65</p>
            <p className="text-sm">+241 77 80 15 13</p>
          </div>
        </div>

        <div className="flex items-center">
          <div>
            <img className="w-6 h-6 mr-2" src={message} />
          </div>
          <p className="text-xs">info@gabonnextnews.com</p>
        </div>
      </div>
      <div
        className={clsx(
          "flex justify-center flex-col",
          mobileWidth && "items-center w-full mt-2",
          !mobileWidth && "w-3/12"
        )}
      >
        <p className="text-xl">Suivez nous</p>
        <div className="flex mt-1">
          <img className="w-6 h-6" src={facebook} />
          <img className="w-6 h-6 ml-2" src={twitter} />
          <img className="w-6 h-6 ml-2" src={linkdin} />
        </div>
      </div>
      <div
        className={clsx(
          "flex justify-center flex-col",
          mobileWidth && "items-center w-full mt-2",
          !mobileWidth && "w-3/12"
        )}
      >
        <p className="text-xl">InfoLettre</p>
        <input className="w-full h-8 p-2 rounded-sm mt-2" placeholder="Email" />
        <button className="w-full mt-3 h-8 rounded-sm bg-green-50 text-xs">
          Sʼinscrire{" "}
        </button>
      </div>
    </div>
  );
}

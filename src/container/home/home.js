import React from "react";
import Navbar from "../../components/navbar/navbar";
import Swipper from "../../components/swipper/swipper";
import Homepage from "../home.page";
import Footer from "../../components/footer/footer";

export default function Home() {
  return (
    <div className="bg-gray-50 w-full">
      <Navbar />
      <div className="p-4">
        <Swipper />
        <Homepage />
        <Footer/>
      </div>
    </div>
  );
}

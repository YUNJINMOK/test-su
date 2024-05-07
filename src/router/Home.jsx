import React from "react";
import Layout from "../components/Layout";
import asd from "../assets/gpsLogo.svg";

export default function Home() {
  return (
    <Layout>
      <div className="w-full h-full flex flex-col justify-center items-center py-10">
        <div className="w-[300px] h-[100px]  ">
          <div className=" relative w-full h-full flex flex-col justify-center">
            <span>앱 이용방법</span>
            <span>스템프 찍고 다양한 경품 받기f!</span>
            <img className=" absolute right-[30%] top-4 w-[15%]" src={asd} />
          </div>
        </div>
        <div className="w-[300px] h-[300px]  rounded-lg"></div>
      </div>
    </Layout>
  );
}

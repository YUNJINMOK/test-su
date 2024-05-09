import React from "react";
import Layout from "../components/Layout";
import Textbox from "../components/Textbox";
import { Link } from "react-router-dom";
import { useTheme } from "../context/themeProvider.js";
import infoMark from "../assets/qr-scan.png";

export default function Home() {
  const [ThemeMode, toggleTheme] = useTheme();
  return (
    <Layout>
      <div className="w-full h-full flex flex-col justify-center items-center py-10">
        <div className="w-[300px] h-[100px]  ">
          <div className=" relative w-full h-full flex items-center">
            <div className="w-full h-full flex flex-col ml-4 justify-center">
              <span className="text-2xl">앱 이용 방법</span>
              <span>스탬프 찍고 경품 받아가세요!</span>
            </div>
            <img className=" absolute -right-0 top-[22px] w-[30%] -z-10" src={infoMark} alt="안내 이미지" />
          </div>
        </div>
        <div className={`w-[300px] h-[390px] ${ThemeMode === "dark" ? "bg-[#292929]" : "bg-[#ECECEC]"}  rounded-lg flex flex-col`}>
          <Link to="/introsumok" className="w-full h-1/3">
            <Textbox title="수목원소개" text="이용시간, 주의사항 등" />
          </Link>
          <Link to="/indoorinfo" className="w-full h-1/3">
            <Textbox title="내부 시설 안내" text="전시관, 체험장 소개" />
          </Link>
          <Link to="/shelterinfo" className="w-full h-1/3">
            <Textbox title="편의시설 안내" text="ㅁㄴㅇㄻㄴㅇㄹ" border="border-none" />
          </Link>
        </div>
      </div>
    </Layout>
  );
}

import React, { useState } from "react";
import Layout from "../components/Layout";
import Textbox from "../components/Textbox";
import { Link } from "react-router-dom";
import { useTheme } from "../context/themeProvider.js";
import infoMark from "../assets/qr-scan.png";

export default function Home() {
  const [ThemeMode, toggleTheme] = useTheme();
  let [showGuide, setShowGuide] = useState(false);
  let [guideNum, setGuideNum] = useState(1);
  const [guide, setGuide] = useState(<div className="absolute self-center justify-self-center font-semibold text-center w-3/4 text-white text-2xl">아래쪽의 QR 촬영 버튼을 누르면 카메라가 켜집니다.</div>);
  const nextGuide = () => {
    if (guideNum === 1) setGuideNum(++guideNum);
    if (guideNum === 2) {
      setGuide(<div className="absolute self-center justify-self-center font-semibold text-center w-3/4 text-white text-2xl">가이드 2번</div>);
    } else if (guideNum === 3) {
      setGuide(<div className="absolute self-center justify-self-center font-semibold text-center w-3/4 text-white text-2xl">가이드 3번</div>);
    } else if (guideNum === 4) {
      setGuide(<div className="absolute self-center justify-self-center font-semibold text-center w-3/4 text-white text-2xl">가이드 4번</div>);
    } else if (guideNum === 5) {
      setGuideNum(1);
      setShowGuide(false);
      return;
    }
    setGuideNum(++guideNum);
  };
  return (
    <Layout>
      {showGuide && (
        <div onClick={nextGuide} className="absolute h-[108vh] -top-[60px] w-screen bg-black/70 z-10 grid">
          {guide}
        </div>
      )}
      <div className="w-full h-full flex flex-col justify-center items-center py-10">
        <div
          className="w-[300px] h-[100px]"
          onClick={() => {
            setGuideNum(1);
            setShowGuide(true);
          }}
        >
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

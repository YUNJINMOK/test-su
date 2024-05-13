import React, { useState } from "react";
import Layout from "../components/Layout";
import Textbox from "../components/Textbox";
import { Link } from "react-router-dom";
import { useTheme } from "../context/themeProvider.js";
import infoMark from "../assets/qr-scan.png";
import { GrFormNext, GrClose } from "react-icons/gr";

function GuideEle({ zIndex, txt, bg, close }) {
  return (
    <div className={`absolute grid font-semibold text-center w-full h-full text-white text-2xl leading-[36px] ${zIndex} ${bg} bg-cover bg-center bg-no-repeat`}>
      <div className="self-center justify-self-center">
        <p dangerouslySetInnerHTML={{ __html: txt }} />
        {close ? (
          <p className="flex items-center justify-end pt-5 px-2 font-normal text-[20px]">
            닫기&nbsp;
            <GrClose size="16px" />
          </p>
        ) : (
          <p className="flex items-center justify-end pt-5 px-6 font-normal text-[20px]">
            다음 <GrFormNext />
          </p>
        )}
      </div>
    </div>
  );
}

export default function Home() {
  const [ThemeMode, toggleTheme] = useTheme();
  let [showGuide, setShowGuide] = useState(false);
  let [guideNum, setGuideNum] = useState(1);
  const [zin, setZin] = useState("z-10");
  const [guide, setGuide] = useState(<div></div>);

  const nextGuide = () => {
    if (guideNum === 1) {
      setZin("z-30");
      setGuide(<GuideEle zIndex="z-30" txt="QR 코드는 대구 수목원 곳곳에 있습니다. 카메라 렌즈를 QR코드에 가까이 대주세요." bg="bg-[url('./assets/guide2.svg')]" />);
    } else if (guideNum === 2) {
      setGuide(<GuideEle zIndex="z-30" txt="qr 코드의 스캔이 완료되면 스탬프가 찍힙니다. 찍힌 스탬프는 스탬프 메뉴에서 확인할 수 있습니다." bg="bg-[url('./assets/guide3.svg')]" />);
    } else if (guideNum === 3) {
      setGuide(<GuideEle zIndex="z-30" txt="찍힌 스탬프의 갯수에 따라 다양한 경품을 받을 수 있습니다." bg="bg-[url('./assets/guide4.svg')]" close={true} />);
    } else if (guideNum === 4) {
      setShowGuide(false);
      return;
    }
    setGuideNum(++guideNum);
  };
  return (
    <Layout>
      {showGuide && (
        <div onClick={nextGuide} className={`absolute h-[108vh] -top-[60px] w-screen ${zin}`}>
          {guide}
        </div>
      )}
      <div className="w-full h-full flex flex-col justify-center items-center py-10">
        <div
          className="w-[300px] h-[100px]"
          onClick={() => {
            setGuide(
              <GuideEle
                zIndex="z-0"
                txt="아래쪽의 QR 촬영 버튼을 누르면
              카메라가 켜집니다."
                bg="bg-black/70"
              />
            );
            setZin("z-10");
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
            <Textbox title="산림문화 전시관 안내" text="ㅁㄴㅇㄹ" />
          </Link>
          <Link to="/indoorinfo2" className="w-full h-1/3">
            <Textbox title="목재문화 체험장 안내" text="ㅁㄴㅇㄹ" border="border-none" />
          </Link>
        </div>
      </div>
    </Layout>
  );
}

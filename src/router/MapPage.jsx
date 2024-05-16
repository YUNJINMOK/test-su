import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import KakaoMap from "../components/KakaoMap";
import {
  stampPositions,
  toiletPositions,
  parkPositions,
  cafePosition,
} from "../lib/positions.js";
import { FaRestroom } from "react-icons/fa";
import { MdForest } from "react-icons/md";
import { TbLineScan } from "react-icons/tb";
import { useTheme } from "../context/themeProvider.js";

function MapBtn({ onClick, txt, border, Icon, bg }) {
  return (
    <button
      className={`w-[100px] py-5 px-4 border rounded-md flex flex-col items-center justify-around ${border} ${bg}`}
      onClick={onClick}
    >
      <Icon className=" text-[50px] text-[#119724] mb-2" />
      <p>{txt}</p>
    </button>
  );
}

export default function MapPage() {
  const [ThemeMode, toggleTheme] = useTheme();
  const [errorMessage, setErrorMessage] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [iwContent, setIwContent] = useState("");
  const [markers, setMarkers] = useState("스탬프");
  console.log(toggleTheme);

  // 내 위치 가져오기 함수
  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
        },
        (error) => {
          console.error("내 위치 가져오기 실패:", error);
          setErrorMessage("내 위치를 가져오는 중에 오류가 발생했습니다.");
        }
      );
    } else {
      console.error("브라우저가 Geolocation API를 지원하지 않습니다.");
      setErrorMessage("브라우저가 위치 정보를 지원하지 않습니다.");
    }
  };
  getCurrentLocation();
  // 사용자의 위치가 변경될 때마다 KakaoMap 컴포넌트를 다시 렌더링
  useEffect(() => {
    if (userLocation) {
      // KakaoMap 컴포넌트에 사용자의 위치 전달
    }
  }, [userLocation, markers]);

  // 각 버튼 클릭 이벤트 핸들러
  const handleButtonClick = (latitude, longitude, locationName) => {
    setUserLocation({ latitude, longitude });
    setIwContent(`<div style="padding: 10px;">${locationName}</div>`); // 클릭된 버튼의 위치를 사용자의 위치로 설정
  };
  handleButtonClick();
  // 마커 표시할 장소 목록
  let positions;
  switch (markers) {
    case "스탬프":
      positions = stampPositions;
      break;
    case "주차장":
      positions = parkPositions;
      break;
    case "카페/쉼터":
      positions = cafePosition;
      break;
    case "화장실":
      positions = toiletPositions;
      break;
    default:
      break;
  }

  return (
    <Layout>
      <div className="w-full flex flex-col justify-center items-center pt-8 pb-32 gap-4">
        <div className="flex flex-wrap gap-2 justify-center">
          <MapBtn
            txt="QR 코드"
            onClick={() => setMarkers("스탬프")}
            border={
              markers === "스탬프"
                ? "border-[#119724] font-semibold"
                : "border-gray-300"
            }
            Icon={TbLineScan}
            bg={ThemeMode === "dark" ? "bg-[#232325]" : "bg-gray-100 "}
          />
          <MapBtn
            txt="카페/쉼터"
            onClick={() => setMarkers("카페/쉼터")}
            border={
              markers === "카페/쉼터"
                ? "border-[#119724] font-semibold"
                : "border-gray-300"
            }
            Icon={MdForest}
            bg={ThemeMode === "dark" ? "bg-[#232325]" : "bg-gray-100 "}
          />
          <MapBtn
            txt="화장실"
            onClick={() => setMarkers("화장실")}
            border={
              markers === "화장실"
                ? "border-[#119724] font-semibold"
                : "border-gray-300"
            }
            Icon={FaRestroom}
            bg={ThemeMode === "dark" ? "bg-[#232325]" : "bg-gray-100 "}
          />
        </div>
        {/* 카카오지도 */}
        <KakaoMap
          userLocation={userLocation}
          iwContent={iwContent}
          markers={markers}
        />
        {errorMessage && <p>{errorMessage}</p>}
        <div className="flex flex-col w-full">
          {positions.map((p, index) => {
            return (
              <div
                className="flex items-center mx-8 py-4 gap-x-5 border-b border-gray-400 border-dotted"
                key={index}
              >
                <div className={`bgMarker bgMarker${index}`}></div>
                <div>
                  <p className="text-xl mb-1 font-medium">{p.title}</p>
                  <p className="leading-5">{p.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import KakaoMap from "../components/KakaoMap";

export default function MapPage() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [userLocation, setUserLocation] = useState(null);

  // 내 위치 가져오기 함수
  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log("내 위치:", latitude, longitude);
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

  // 사용자의 위치가 변경될 때마다 KakaoMap 컴포넌트를 다시 렌더링
  useEffect(() => {
    if (userLocation) {
      // KakaoMap 컴포넌트에 사용자의 위치 전달
    }
  }, [userLocation]);

  return (
    <Layout>
      <div className="w-full flex flex-col justify-center items-center py-10 gap-4">
        <KakaoMap userLocation={userLocation} />
        {errorMessage && <p>{errorMessage}</p>}
        <button
          className="w-[100px] h-[50px] text-center bg-red-300"
          onClick={getCurrentLocation} // 내 위치 가져오기 함수를 클릭 이벤트에 연결
        >
          내 위치
        </button>
        <button
          className="w-[100px] h-[50px] text-center bg-red-300"
          onClick={getCurrentLocation} // 내 위치 가져오기 함수를 클릭 이벤트에 연결
        >
          화장실
        </button>
      </div>
    </Layout>
  );
}

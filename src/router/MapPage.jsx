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

  // 각 버튼 클릭 이벤트 핸들러
  const handleButtonClick = (latitude, longitude) => {
    setUserLocation({ latitude, longitude }); // 클릭된 버튼의 위치를 사용자의 위치로 설정
  };

  return (
    <Layout>
      <div className="w-full flex flex-col justify-center items-center py-10 gap-4">
        <KakaoMap userLocation={userLocation} />
        {errorMessage && <p>{errorMessage}</p>}
        <div className="w-full flex flex-wrap gap-6 justify-center">
          <button
            className="w-[100px] h-[50px] text-center bg-red-300"
            onClick={getCurrentLocation}
          >
            내 위치
          </button>
          <button
            className="w-[100px] h-[50px] text-center bg-red-300"
            onClick={() =>
              handleButtonClick(35.80052370351272, 128.5201012191372)
            }
          >
            습지원
          </button>
        </div>
      </div>
    </Layout>
  );
}

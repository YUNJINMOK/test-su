import React, { useEffect } from "react";
const { kakao } = window;

export default function KakaoMap({ userLocation }) {
  useEffect(() => {
    const mapContainer = document.getElementById("map"), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(35.79882161141508, 128.5234059355823), // 지도의 중심좌표
        level: 2, // 지도의 확대 레벨
      };

    // 지도를 표시할 div와 지도 옵션으로 지도를 생성합니다
    const map = new kakao.maps.Map(mapContainer, mapOption);

    // 사용자의 위치가 있을 경우 마커로 표시
    if (userLocation) {
      const userPosition = new kakao.maps.LatLng(
        userLocation.latitude,
        userLocation.longitude
      );

      // 사용자 위치를 나타낼 마커 생성
      const marker = new kakao.maps.Marker({
        position: userPosition,
      });

      // 마커를 지도에 표시
      marker.setMap(map);

      // 지도 중심을 사용자의 위치로 이동
      map.setCenter(userPosition);
    }
  }, [userLocation]);

  return (
    <div
      id="map"
      style={{
        width: "90%",
        height: "350px",
      }}
    ></div>
  );
}

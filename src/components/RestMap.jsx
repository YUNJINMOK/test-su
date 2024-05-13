import React, { useEffect } from "react";
import GpsLogo from "../assets/gpsLogo.svg";

const { kakao } = window;

export default function KakaoMap({ userLocation }) {
  useEffect(() => {
    const mapContainer = document.getElementById("map"); // 지도를 표시할 div
    const mapOption = {
      center: new kakao.maps.LatLng(35.7999830984602, 128.52304809244063), // 지도의 중심좌표
      level: 1, // 지도의 확대 레벨
    };

    // 마커가 표시될 위치입니다
    const markerPosition = new kakao.maps.LatLng(
      35.7999830984602,
      128.52304809244063
    );

    // 마커 이미지를 생성합니다
    const imageSize = new kakao.maps.Size(30, 30); // 마커 이미지 크기
    const markerImage = new kakao.maps.MarkerImage(GpsLogo, imageSize);

    // 마커를 생성합니다
    const marker = new kakao.maps.Marker({
      position: markerPosition,
      image: markerImage, // 마커 이미지 설정
    });

    // 지도를 생성합니다
    const map = new kakao.maps.Map(mapContainer, mapOption);

    // 마커를 지도에 표시합니다
    marker.setMap(map);

    // 지도 확대 축소 기능 비활성화
    map.setZoomable(false);
  }, []); // userLocation이 변경되지 않도록 빈 배열로 설정

  return (
    <div
      id="map"
      style={{
        width: "100%",
        height: "400px",
        margin: "0 auto",
      }}
    ></div>
  );
}

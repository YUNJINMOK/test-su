import React, { useEffect } from "react";
const { kakao } = window;

export default function KakaoMap({ userLocation, iwContent }) {
  useEffect(() => {
    const mapContainer = document.getElementById("map"), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(35.79882161141508, 128.5234059355823), // 지도의 중심좌표
        level: 2, // 지도의 확대 레벨
      };

    // 지도를 표시할 div와 지도 옵션으로 지도를 생성합니다
    const map = new kakao.maps.Map(mapContainer, mapOption);
    map.setZoomable(false);

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

      // 인포윈도우를 생성합니다
      let infowindow = new kakao.maps.InfoWindow({
        content: iwContent,
        removable: true, // X 버튼으로 인포윈도우를 닫을 수 있도록 설정합니다
      });

      // 인포윈도우를 표시합니다

      infowindow.open(map, marker);

      let circle = new kakao.maps.Circle({
        center: userPosition, // 원의 중심좌표 입니다
        radius: 40, // 미터 단위의 원의 반지름입니다
        strokeWeight: 2, // 선의 두께입니다
        strokeColor: "#75B8FA", // 선의 색깔입니다
        strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        strokeStyle: "dashed", // 선의 스타일 입니다
        fillColor: "#CFE7FF", // 채우기 색깔입니다
        fillOpacity: 0.7, // 채우기 불투명도 입니다
      });
      circle.setMap(map);

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

import React, { useEffect, useState } from "react";
import GpsLogo from "../assets/gpsLogo.svg";


export default function ToiletMap() {
  const [userLocation, setUserLocation] = useState(null);

  
  useEffect(() => {
    const { kakao } = window;

    // 사용자의 현재 위치 가져오기
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          setUserLocation({ latitude, longitude });
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  useEffect(() => {
    const { kakao } = window;
    if (kakao && userLocation) {
      const mapContainer = document.getElementById("map");
      const mapOption = {
        center: new kakao.maps.LatLng(userLocation.latitude, userLocation.longitude),
        level: 10,
      };

      const map = new kakao.maps.Map(mapContainer, mapOption);

      const positions = [
        {
          title: "주차장 화장실",
          latlng: new kakao.maps.LatLng(35.8017, 128.52),
        },
        {
          title: "산책로 화장실 1",
          latlng: new kakao.maps.LatLng(35.7995, 128.5207),
        },
        {
          title: "산책로 화장실 2",
          latlng: new kakao.maps.LatLng(35.7987, 128.5247),
        },
        {
          title: "산책로 화장실 3",
          latlng: new kakao.maps.LatLng(35.7951, 128.5256),
        },
      ];

      // 사용자 현재 위치 마커 생성
      const imageSize = new kakao.maps.Size(24, 35);
      const userMarkerImage = new kakao.maps.MarkerImage(GpsLogo, imageSize);
      const userMarker = new kakao.maps.Marker({
        map: map,
        position: mapOption.center,
        title: "내 위치",
        image: userMarkerImage,
      });

      // 화장실 위치 마커 생성
      positions.forEach((pos) => {
        const markerImage = new kakao.maps.MarkerImage(GpsLogo, imageSize);
        const marker = new kakao.maps.Marker({
          map: map,
          position: pos.latlng,
          title: pos.title,
          image: markerImage,
        });
      });
    }
  }, [userLocation]);

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

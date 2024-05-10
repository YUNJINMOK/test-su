import React, { useEffect } from "react";
import GpsLogo from "../assets/gpsLogo.svg";

export default function ShelterMap() {
  useEffect(() => {
    const { kakao } = window;
    
    if (kakao) {
      const mapContainer = document.getElementById("map");
      const mapOption = {
        center: new kakao.maps.LatLng(35.79882161141508, 128.5234059355823),
        level: 5,
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

    
      for (let i = 0; i < positions.length; i++) {
        const imageSize = new kakao.maps.Size(24, 35);
        const markerImage = new kakao.maps.MarkerImage(GpsLogo, imageSize);

        const marker = new kakao.maps.Marker({
          map: map,
          position: positions[i].latlng,
          title: positions[i].title,
          image: markerImage,
        });
      }
    }
  }, []);

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

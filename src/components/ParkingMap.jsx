import React, { useEffect } from "react";
import { parkPositions } from "../lib/positions.js";
import GpsLogo from "../assets/gpsLogo.svg";

export default function ParkingMap() {
  useEffect(() => {
    const { kakao } = window;

    if (kakao) {
      const mapContainer = document.getElementById("map");
      const mapOption = {
        center: new kakao.maps.LatLng(35.802384098351425, 128.52011591230576),
        level: 3,
      };

      const map = new kakao.maps.Map(mapContainer, mapOption);

      for (let i = 0; i < parkPositions.length; i++) {
        const imageSize = new kakao.maps.Size(24, 35);
        const markerImage = new kakao.maps.MarkerImage(GpsLogo, imageSize);

        const marker = new kakao.maps.Marker({
          map: map,
          position: parkPositions[i].latlng,
          title: parkPositions[i].title,
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

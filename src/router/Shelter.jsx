import React, { useState } from "react";
import Layout from "../components/Layout";
import Title from "../components/Title";
import { FaRestroom } from "react-icons/fa";
import { FaParking } from "react-icons/fa";
import { MdForest } from "react-icons/md";
import CafeImg from "../assets/coffee.jpg";
import GreenHouse from "../assets/greenhouse.png";
import ToiletMap from "../components/ToiletMap";
import ParkingMap from "../components/ParkingMap";
import RestMap from "../components/RestMap";
import GreenDot from "../components/GreenDot";
import Hours from "../components/Hours";
import "../style/shelter.css";

export default function Shelter() {
  const [activeComponent, setActiveComponent] = useState("toilet");

  const showToiletMap = () => setActiveComponent("toilet");
  const showRestMap = () => setActiveComponent("rest");
  const showParkingMap = () => setActiveComponent("parking");
  return (
    <Layout>
      <div className="shelterSection">
        <Title title="편의시설 안내" />
        {/* 수목원 커피 */}
        <div className="shelterBox">
          <h2 className="mainGreen-title">수목원 커피</h2>
          <div className="shelterImg">
            <img src={CafeImg} alt="수목원 커피 사진 (출처 : 업체제공사진)" />
          </div>
          <div className="shelterText">
            <p>
              수목원 내 위치한 카페로 숲을 바라보며 차 한잔을 즐기기 좋은
              곳입니다. 다양한 방문객의 취향에 맞춘 간식거리도 함께 판매되고
              있어 많은 분들이 잠시 쉬었다 가는 곳입니다.
            </p>
            <p>대구광역시 달서구 화암로 342</p>
          </div>
          <div className="intro-time">
            <GreenDot title="이용시간" />
            <Hours date1="매일" time1="오전 10시 ~ 오후 6시" />
          </div>
        </div>
        {/* 선인장 온실 */}
        <div className="shelterBox">
          <h2 className="mainGreen-title">선인장 온실</h2>
          <div className="shelterImg">
            <img
              src={GreenHouse}
              alt="선인장 온실 사진 (출처 : 대구트립로드 https://tour.daegu.go.kr/index.do?menu_id=00002913)"
            />
          </div>
          <div className="shelterText">
            <p>
              이국적인 정취가 물씬 풍기는 선인장 온실.
              <br /> 열대지방에서 자생하는 선인장과 다육식물 200여 종이 어우러져
              관람객의 눈길을 끄는 곳으로 금호, 용설란, 길상천, 오채각, 화월
              등이 식재되어 있습니다.
            </p>
            <p>대구광역시 달서구 대곡동 284</p>
          </div>
          <div className="intro-time">
            <GreenDot title="이용시간" />
            <Hours date1="화 ~ 일" time1="오전 10시 ~ 오후 4시" />
            <div className="timetable-caution">
              ※매주 월요일은 식물과 각종 시설물 등을 중점 정비하는 날이므로 온실
              견학이 제한됩니다.
            </div>
          </div>
        </div>
        {/* 그외 시설 */}
        <div>
          <h2 className="mainGreen-title">그 외 시설</h2>
          <div className="etcShelter">
            <button className="toiletMap" onClick={showToiletMap} tabIndex="0">
              <FaRestroom className="etcIcon" />
              <p>화장실</p>
            </button>
            <button
              className="parkingMap"
              onClick={showParkingMap}
              tabIndex="0"
            >
              <FaParking className="etcIcon" />
              <p>주차장</p>
            </button>
            <button className="restMap" onClick={showRestMap} tabIndex="0">
              <MdForest className="etcIcon" />
              <p>쉼터</p>
            </button>
          </div>
          <div className="shelterMap">
            {activeComponent === "toilet" && <ToiletMap />}
            {activeComponent === "parking" && <ParkingMap />}
            {activeComponent === "rest" && <RestMap />}
          </div>
        </div>
      </div>
    </Layout>
  );
}

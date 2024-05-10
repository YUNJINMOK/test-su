import React from "react";
import Layout from "../components/Layout";
import Title from "../components/Title";
import { FaRestroom } from "react-icons/fa";
import { FaParking } from "react-icons/fa";
import { MdForest } from "react-icons/md";

import "../style/shelter.css";
import { Link } from "react-router-dom";

export default function Shelter() {
  return (
    <Layout>
      <div className="shelterSection">
        <Title title="편의시설 안내" />
        {/* 수목원 커피 */}
        <div className="shelterBox">
          <h2 className="mainGreen-title">수목원 커피</h2>
          <div className="shelterImg">
            <img src="" alt="수목원 커피 사진" />
          </div>
          <div className="shelterText">
            <p>대구광역시 달서구 화암로 342</p>
            <p>
              수목원 내 위치한 카페로 숲을 바라보며 차 한잔을 즐기기 좋은
              곳입니다. 다양한 방문객의 취향에 맞춘 간식거리도 함께 판매되고
              있어 많은 분들이 잠시 쉬었다 가는 곳입니다.
            </p>
          </div>
        </div>
        {/* 선인장 온실 */}
        <div className="shelterBox">
          <h2 className="mainGreen-title">선인장 온실</h2>
          <div className="shelterImg">
            <img src="" alt="선인장 온실 사진" />
          </div>
          <div className="shelterText">
            <p>대구광역시 달서구 대곡동 284</p>
            <p>
              이국적인 정취가 물씬 풍기는 선인장 온실.
              <br /> 열대지방에서 자생하는 선인장과 다육식물 200여 종이 어우러져
              관람객의 눈길을 끄는 곳으로 금호, 용설란, 길상천, 오채각, 화월
              등이 식재되어 있습니다.
            </p>
          </div>
        </div>
        {/* 그외 시설 */}
        <div>
          <h2 className="mainGreen-title">그 외 시설</h2>
          <div className="etcShelter">
            <Link to="/map" className="etcIconBox">
              <FaRestroom className="etcIcon" />
              <p>화장실</p>
            </Link>
            <Link to="/map" className="etcIconBox">
              <FaParking className="etcIcon" />
              <p>주차장</p>
            </Link>
            <Link to="/map" className="etcIconBox">
              <MdForest className="etcIcon" />
              <p>쉼터</p>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

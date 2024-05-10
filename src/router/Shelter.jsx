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
          <div className="shelterCafe">
            <img src="" alt="수목원 커피 사진" />

            <p>수목원 커피 설명</p>
          </div>
        </div>
        {/* 선인장 온실 */}
        <div className="shelterBox">
          <h2 className="mainGreen-title">선인장 온실</h2>
          <div className="shelterGreenHouse">
            <p>선인장 온실</p>
            <img src="" alt="선인장 온실 사진" />
          </div>
        </div>
        {/* 그외 시설 */}
        <div>
          <h2 className="mainGreen-title">그 외 시설</h2>
          <div className="etcShelter">
            <Link to="/map" className="etcIconBox">
              <FaRestroom className="etcIcon"/>
              <p>화장실</p>
            </Link>
            <Link to="/map" className="etcIconBox">
              <FaParking className="etcIcon"/>
              <p>주차장</p>
            </Link>
            <Link to="/map" className="etcIconBox">
              <MdForest className="etcIcon"/>
              <p>쉼터</p>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

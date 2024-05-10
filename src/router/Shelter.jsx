import React from "react";
import Layout from "../components/Layout";
import Title from "../components/Title";
import "../style/shelter.css";

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

            <p>수목원 커피 설명</p>
          </div>
        </div>
        {/* 선인장 온실 */}
        <div className="shelterBox">
          <h2 className="mainGreen-title">선인장 온실</h2>
          <div className="shelterImg">
            <p>선인장 온실</p>
            <img src="" alt="선인장 온실 사진" />
          </div>
        </div>
        {/* 그외 시설 */}
        <div>
          <h2 className="mainGreen-title">그 외 시설</h2>
          <div className=".etcShelter">
            <div>화장실</div>
            <div>주차장</div>
            <div>쉼터</div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

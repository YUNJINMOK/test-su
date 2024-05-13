import React from "react";
import Layout from "../components/Layout";
import "../style/indoorinfo.css";
import Title from "../components/Title";
import Hours from "../components/Hours";
import GreenDot from "../components/GreenDot";
import { Link } from "react-router-dom";

export default function IndoorInfo2() {
  return (
    <Layout>
      <div className="indoor-section">
        <Title title="목재문화체험장" />
        <article>
          <div className="forestcul">
            <p className="forestcul-text">시민들에게 목공체험을 통한 다양한 목재문화 및 목공예에 관한 정보를 제공하는 공간입니다.</p>
          </div>
          {/* 이용시간 */}
          <div className="intro-time">
            <GreenDot title="이용 시간" />
            <Hours date1="3월 1일 ~ 10월 31일" time1="오전 9시 ~ 오후 5시" date2="11월 1일 ~ 2월 28일" time2="오전 9시 ~ 오후 4시" />
            <div className="timetable-caution">※매주 월요일과 공휴일은 휴관일입니다.</div>
          </div>
          {/* 이용안내 */}
          <div className="useProgInfo">
            <GreenDot title="목공 체험 안내" />
            <div className="progInnerInfo">
              <p className="progTit">체험프로그램 참여 방법</p>
              <p className="mb-6">
                - <Link to="https://yeyak.daegu.go.kr/yeyak/experience/experienceListView.do?memId=B0000005">대구광역시 통합예약시스템</Link>에서 3일전까지 예약
              </p>
              <p className="progTit">참여 비용</p>
              <p>- 성인: 2,000원</p>
              <p>- 미성년자: 1,000원</p>
              <p>※현장 카드 결제만 가능하며, 재료비는 별도입니다.</p>
              <p>※20명 이상 예약시 개인체험료의 20%가 할인됩니다.</p>
            </div>
          </div>
          {/* 층별안내 */}
          <div className="floorInfo">
            <GreenDot title="층별 안내" />
            <div>
              <div className="floorInfo-con-box">
                <div>
                  1층 <p>유아체험장· 유아놀이방, 초등체험장</p>
                </div>
                <div className="floorImg">
                  <div></div>
                </div>
              </div>
              <div className="floorInfo-con-box">
                <div>
                  2층<p>중등체험장, 성인체험장</p>
                </div>
                <div className="floorImg">
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </Layout>
  );
}

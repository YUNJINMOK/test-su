import React from "react";
import Layout from "../components/Layout";
import "../style/indoorinfo.css";
import Title from "../components/Title";
import Hours from "../components/Hours";
import GreenDot from "../components/GreenDot";
import { Link } from "react-router-dom";

export default function IndoorInfo() {
  return (
    <Layout>
      <div className="indoor-section">
        <Title title="내부시설 안내" />
        {/* 산림문화전시관 */}
        <article>
          <div className="forestcul">
            <p className="mainGreen-title">산림문화전시관</p>
            <p className="forestcul-text">수목원과 대구의 식물상을 소개하는 공간입니다. 나무 이름의 유래, 꽃의 구조, 식물, 새, 곤충의 세밀화 등 다양한 정보를 접할 수 있습니다.</p>
          </div>
          {/* 이용시간 */}
          <div className="intro-time">
            <GreenDot title="이용시간" />
            <Hours date1="3월 1일 ~ 10월 31일" time1="오전 10시 ~ 오후 5시" date2="11월 1일 ~ 2월 28일" time2="오전 10시 ~ 오후 4시" />
            <div className="timetable-caution">※매주 월요일과 추석, 설날은 휴관일입니다.</div>
          </div>
          {/* 층별안내 */}
          <div className="floorInfo">
            <GreenDot title="층별 안내" />
            <div>
              <div className="floorInfo-con-box">
                <p>
                  1층 <p>비지터 센터, 제1전시실, 작은 도서관</p>
                </p>
                <div className="floorImg">
                  <div></div>
                </div>
              </div>
              <div className="floorInfo-con-box">
                <p>
                  2층<p>제2전시실, 기획전시실</p>
                </p>
                <div className="floorImg">
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </article>
        {/* 목재문화체험장 */}
        <article>
          <div className="forestcul">
            <p className="mainGreen-title">목재문화체험장</p>
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
                <p>
                  1층 <p>유아체험장· 유아놀이방, 초등체험장</p>
                </p>
                <div className="floorImg">
                  <div></div>
                </div>
              </div>
              <div className="floorInfo-con-box">
                <p>
                  2층<p>중등체험장, 성인체험장</p>
                </p>
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

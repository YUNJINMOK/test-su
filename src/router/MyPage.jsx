import React, { useState } from "react";
import Layout from "../components/Layout";
import "../style/mypage.css";
import { useTheme } from "../context/themeProvider.js";
// import styled from "styled-components";

export default function MyPage() {
  const [btn1, setBtn1] = useState(false);
  const [btn2, setBtn2] = useState(false);
  const [ThemeMode, toggleTheme] = useTheme();
  console.log(ThemeMode)
  function darkMode () {setBtn1(!btn1);
    toggleTheme()}

  return (
    <Layout>
      <section>
        <h2>ooo123 님의 마이페이지</h2>
        <div id="accountInfo">
          <div>
            <p>아이디</p>
            <p>ooo123</p>
          </div>
          <div>
            <div>
              <p>비밀번호</p>
              <p>******</p>
            </div>
            <button>수정</button>
          </div>
        </div>
      </section>
      <div className="settingBtn"
      onClick={darkMode
      }>
        <div className="btnTxt">
          <p>다크 모드</p>
          <p>앱 화면을 어둡게 변경합니다.</p>
        </div>
        <div className="togBtn">
          <div
            className="togCircle"
            style={{ left: btn1 ? "22px" : "0" }}
          ></div>
        </div>
      </div>
      <div className="settingBtn" onClick={() => setBtn2(!btn2)}>
        <div className="btnTxt">
          <p>버튼 이름</p>
          <p>버튼 설명이 들어오는 곳</p>
        </div>
        <div className="togBtn">
          <div
            className="togCircle"
            style={{ left: btn2 ? "22px" : "0" }}
          ></div>
        </div>
      </div>
    </Layout>
  );
}

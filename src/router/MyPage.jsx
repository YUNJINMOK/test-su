import React, { useState } from "react";
import Layout from "../components/Layout";
import { useTheme } from "../context/themeProvider.js";
import "../style/mypage.css";

export default function MyPage() {
  const [btn2, setBtn2] = useState(false);
  const [ThemeMode, toggleTheme] = useTheme();
  function darkMode() {
    toggleTheme();
  }

  return (
    <Layout>
      <section id="myPage">
        <article id="myAccount">
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
        </article>
        <div className="settingBtn" onClick={darkMode}>
          <div className="btnTxt">
            <p>다크 모드</p>
            <p>앱 화면을 어둡게 변경합니다.</p>
          </div>
          <div className={`togBtn ${ThemeMode === "dark" ? "darkBtn" : ""}`}>
            <div className="togCircle" style={{ left: ThemeMode === "dark" ? "22px" : "0" }}></div>
          </div>
        </div>
        <div className="settingBtn" onClick={() => setBtn2(!btn2)}>
          <div className="btnTxt">
            <p>색맹 모드</p>
            <p>색깔을 구분하기 힘든 분들을 위해 찍힌 스탬프의 모양을 변경합니다.</p>
          </div>
          <div className={`togBtn ${ThemeMode === "dark" ? "darkBtn" : ""}`}>
            <div className="togCircle" style={{ left: btn2 ? "22px" : "0" }}></div>
          </div>
        </div>
        <p id="logout">로그아웃</p>
      </section>
    </Layout>
  );
}

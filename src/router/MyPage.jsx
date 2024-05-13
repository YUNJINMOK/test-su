import React, { useState } from "react";
import Layout from "../components/Layout";
import { useTheme } from "../context/themeProvider.js";
import "../style/mypage.css";
import IsLogin from "../components/IsLogin.js";
import { useNavigate } from "react-router-dom";


export default function MyPage() {
  const navigate = useNavigate()
  const [btn2, setBtn2] = useState(false);
  const [ThemeMode, toggleTheme] = useTheme();
  function darkMode() {
    toggleTheme();
  }

  const [user, setUser] = useState(null); // 사용자 정보를 상태로 관리
  const onClick = () => {
    sessionStorage.removeItem("userData");
    alert("로그아웃 되었습니다.");
    navigate("/home")

  }
  // IsLogin 컴포넌트에서 전달한 사용자 정보를 받아 상태를 업데이트하는 함수
  const updateUser = (userData) => {
    setUser(userData);
  };
  return (
    <Layout>
      <section id="myPage">
        <article id="myAccount">
        {/* IsLogin 컴포넌트에 updateUser 함수를 props로 전달하여 사용자 정보 업데이트 */}
        <IsLogin updateUser={updateUser} />
        {/* 사용자 정보를 이용하여 마이페이지 렌더링 */}
        {user && (
          <>
            <h2>{user?.user_id}님의 마이페이지</h2>
            <div id="accountInfo">
              <div>
                <p>아이디</p>
                <p>{user?.user_id}</p>
              </div>
              <div>
                <div>
                  <p>비밀번호</p>
                  <p>******</p>
                </div>
                <button className={`editBtn ${ThemeMode==="dark"?"darkEditBtn":""}`}>수정</button>
              </div>
            </div>
          </>
        )}
      </article>
        <div
          className={`settingBtn ${
            ThemeMode === "dark" ? "DarkSettingBtn" : ""
          }`}
          onClick={darkMode}
        >
          <div className="btnTxt">
            <p>다크 모드</p>
            <p>앱 화면을 어둡게 변경합니다.</p>
          </div>
          <div className={`togBtn ${ThemeMode === "dark" ? "darkBtn" : ""}`}>
            <div
              className={`togCircle ${
                ThemeMode === "dark" ? "darkTogCircle" : ""
              }`}
              style={{ left: ThemeMode === "dark" ? "22px" : "0" }}
            ></div>
          </div>
        </div>
        <div
          className={`settingBtn ${
            ThemeMode === "dark" ? "DarkSettingBtn" : ""
          }`}
          onClick={() => setBtn2(!btn2)}
        >
          <div className="btnTxt">
            <p>색맹 모드</p>
            <p>
              색깔을 구분하기 힘든 분들을 위해 찍힌 스탬프의 모양을 변경합니다.
            </p>
          </div>
          <div className={`togBtn ${ThemeMode === "dark" ? "darkBtn" : ""}`}>
            <div
              className={`togCircle ${
                ThemeMode === "dark" ? "darkTogCircle" : ""
              }`}
              style={{ left: btn2 ? "22px" : "0" }}
            ></div>
          </div>
        </div>
        <p id="logout" onClick={onClick}>로그아웃</p>
      </section>
    </Layout>
  );
}

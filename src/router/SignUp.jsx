import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <Layout>
      <div className="w-full flex flex-col items-center py-16">
        <span className="text-3xl font-semibold mb-7">회원가입</span>
        <form action="" className="flex flex-col gap-5 mb-2">
          <input name="id" className="w-[300px] h-[50px] rounded-lg border-none ring-1  ring-gray-300 outline-none focus:ring-2 focus:ring-[#119724]" type="text" placeholder="아이디" />
          <input name="password" className="w-[300px] h-[50px] rounded-lg border-none ring-1 ring-gray-300 outline-none focus:ring-2 focus:ring-[#119724]" type="password" placeholder="비밀번호" />
          <input name="password2" className="w-[300px] h-[50px] rounded-lg border-none ring-1 ring-gray-300 outline-none focus:ring-2 focus:ring-[#119724]" type="password" placeholder="비밀번호 확인" />
          <button className="w-[300px] h-[50px] bg-[#119724] rounded-lg flex justify-center items-center text-xl text-white cursor-pointer">가입하기</button>
        </form>
        <Link to="/login">이미 계정이 있다면 로그인</Link>
      </div>
    </Layout>
  );
}

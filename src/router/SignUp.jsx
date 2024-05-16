import React, { useState } from "react";
import Layout from "../components/Layout";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { useForm } from "react-hook-form";
import { apiPostUserRegiser } from "../api";
import Kakao from "../assets/kakaoLogo.png";
import Google from "../assets/googleLogo.svg";
import { PiEyeLight, PiEyeSlashLight } from "react-icons/pi";

export default function SignUp() {
  const [type, setType] = useState(true);
  const [type2, setType2] = useState(true);
  const kakaoUrl = "https://kauth.kakao.com/oauth/authorize";
  const config = {
    response_type: "code",
    client_id: process.env.REACT_APP_KAKAO_CLIENT_ID,
    redirect_uri: process.env.REACT_APP_KAKAO_REDIRECT_URI,
  };

  const params = new URLSearchParams(config).toString();
  const finalUrl = `${kakaoUrl}?${params}`;

  const googleUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.REACT_APP_GOOGLE_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_GOOGLE_REDIRECT_URL}&response_type=code&scope=email profile`;
  const navigate = useNavigate();
  const { mutate } = useMutation(apiPostUserRegiser, {
    onSuccess: (data) => {
      if (data.result === true) {
        navigate("/login");
      }
    },
    onSettled: (data) => {
      if (data.result !== true || data.result2 !== true) {
        if (data.result === false) {
          setError(`user_id`, {
            message: data.message,
          });
        }
        if (data.result2 === false) {
          setError(`password1`, {
            message: data.message,
          });
        }
      }
    },
  });
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();
  const onValid = (data) => mutate(data);
  return (
    <Layout>
      <div className="w-full flex flex-col items-center py-16">
        <span className="text-3xl font-semibold mb-7">회원가입</span>
        <form
          onSubmit={handleSubmit(onValid)}
          action=""
          className="flex flex-col mb-2"
        >
          <div className="flex flex-col mb-6">
            <input
              {...register("user_id")}
              name="user_id"
              className={`w-[300px] h-[50px] rounded-lg border-none ring-1 ring-gray-300 outline-none focus:ring-2 focus:ring-[#119724] ${
                errors.hasOwnProperty("user_id") && "ring-red-500"
              }`}
              type="text"
              placeholder="아이디"
            />
            {errors.hasOwnProperty("user_id") && (
              <span className="text-red-500 text-sm mt-1 ml-1">
                {errors?.user_id?.message}
              </span>
            )}
          </div>
          <div className="flex flex-col mb-6">
            <div className="relative">
              <input
                {...register("password1")}
                name="password1"
                className={`w-[300px] h-[50px] rounded-lg border-none ring-1 ring-gray-300 outline-none focus:ring-2 focus:ring-[#119724] ${
                  errors.hasOwnProperty("password1") && "ring-red-500"
                }`}
                type={type ? "password" : "text"}
                placeholder="비밀번호"
              />
              <div
                onClick={() => setType(!type)}
                className="absolute top-[2px] right-[5px] px-3 py-[6px] bg-white"
              >
                {type ? (
                  <PiEyeLight size="35px" color="#aaa" />
                ) : (
                  <PiEyeSlashLight size="35px" color="#aaa" />
                )}
              </div>
            </div>
            {errors.hasOwnProperty("password1") && (
              <span className="text-red-500 text-sm mt-1 ml-1">
                {errors?.password1?.message}
              </span>
            )}
          </div>
          <div className="relative">
            <input
              {...register("password2")}
              name="password2"
              className="w-[300px] h-[50px] rounded-lg border-none ring-1 ring-gray-300 outline-none focus:ring-2 focus:ring-[#119724]"
              type={type2 ? "password" : "text"}
              placeholder="비밀번호 확인"
            />
            <div
              onClick={() => setType2(!type2)}
              className="absolute top-[2px] right-[5px] px-3 py-[6px] bg-white"
            >
              {type2 ? (
                <PiEyeLight size="35px" color="#aaa" />
              ) : (
                <PiEyeSlashLight size="35px" color="#aaa" />
              )}
            </div>
          </div>
          <button className="w-[300px] h-[50px] bg-[#119724] rounded-lg flex justify-center items-center text-xl text-white cursor-pointer mt-8">
            가입하기
          </button>
        </form>
        <div className="w-[300px] h-[50px] bg-[#FEE500] rounded-lg flex justify-around items-center mb-2">
          <img
            className="w-[50px] h-[100%] object-contain"
            src={Kakao}
            alt="kakao"
          />
          <Link to={finalUrl} className=" no-underline text-black">
            <p className="flex items-center justify-center text-xl font-semibold">
              카카오 회원가입
            </p>
          </Link>
          <span className="w-[10%]"></span>
        </div>
        <div className="w-[300px] h-[50px] bg-[#F2F2F2] rounded-lg flex justify-around items-center mb-2">
          <img
            className="w-[50px] h-[100%] cursor-pointer object-contain"
            src={Google}
            alt="google"
          />
          <Link to={googleUrl} className=" no-underline text-black">
            <p className="flex items-center justify-center text-xl font-semibold">
              구글 회원가입
            </p>
          </Link>
          <span className="w-[10%]"></span>
        </div>
        <Link to="/login">이미 계정이 있다면 로그인</Link>
      </div>
    </Layout>
  );
}

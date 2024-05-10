import React from "react";
import Layout from "../components/Layout";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { useForm } from "react-hook-form";
import { apiPostUserRegiser } from "../api";

export default function SignUp() {
  const navigate = useNavigate();
  const { mutate } = useMutation(apiPostUserRegiser, {
    onSuccess: (data) => {
      if (data.result === true) {
        navigate("/login");
      }
    },
    onSettled: (data) => {
      if (data.result === false) {
        setError(`user_id`, {
          message: data.message,
        });
        setError(`password1`, {
          message: data.message,
        });
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
        <form onSubmit={handleSubmit(onValid)} action="" className="flex flex-col mb-2">
          <div className="flex flex-col mb-6">
            <input {...register("user_id")} name="user_id" className={`w-[300px] h-[50px] rounded-lg border-none ring-1 ring-gray-300 outline-none focus:ring-2 focus:ring-[#119724] ${errors.hasOwnProperty("user_id") && "ring-red-500"}`} type="text" placeholder="아이디" />
            {errors.hasOwnProperty("user_id") && <span className="text-red-500 text-sm mt-1 ml-1">{errors?.user_id?.message}</span>}
          </div>
          <div className="flex flex-col mb-6">
            <input {...register("password1")} name="password1" className={`w-[300px] h-[50px] rounded-lg border-none ring-1 ring-gray-300 outline-none focus:ring-2 focus:ring-[#119724] ${errors.hasOwnProperty("password1") && "ring-red-500"}`} type="password" placeholder="비밀번호" />
            {errors.hasOwnProperty("password1") && <span className="text-red-500 text-sm mt-1 ml-1">{errors?.password1?.message}</span>}
          </div>
          <input {...register("password2")} name="password2" className="w-[300px] h-[50px] rounded-lg border-none ring-1 ring-gray-300 outline-none focus:ring-2 focus:ring-[#119724]" type="password" placeholder="비밀번호 확인" />
          <button className="w-[300px] h-[50px] bg-[#119724] rounded-lg flex justify-center items-center text-xl text-white cursor-pointer mt-8">가입하기</button>
        </form>
        <Link to="/login">이미 계정이 있다면 로그인</Link>
      </div>
    </Layout>
  );
}

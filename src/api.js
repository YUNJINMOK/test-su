const BASE_URL = process.env.REACT_APP_BASE_URL;
//스탬프 test
export async function setStamp(stamp_id) {
  try {
    return await fetch(`${BASE_URL}/test`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ stamp_id: stamp_id, user_id: 1 }),
    }).then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
}

//회원가입 요청
export async function apiPostUserRegiser(data) {
  try {
    return await fetch(`${BASE_URL}/users/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
}

//로그인 요청
export async function apiPostUserLogin(data) {
  try {
    return await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
}

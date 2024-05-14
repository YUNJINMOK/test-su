import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Weather({ latitude, longitude }) {
  const [weatherData, setWeatherData] = useState(null);

  const apiKey = "6a0d33958b14a3c26fa985a6fecc4763"; // API 키를 직접 지정
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

  useEffect(() => {
    axios
      .get(url)
      .then((responseData) => {
        console.log(responseData);
        const data = responseData.data;
        const tempCelsius = (data.main.temp - 273.15).toFixed(0);
        setWeatherData({
          temp: isNaN(tempCelsius) ? null : Number(tempCelsius), // 숫자로 변환
          icon: data.weather[0].icon,
        });
      })
      .catch((error) => console.log(error));
  }, []); // 빈 배열을 전달하여 한 번만 실행되도록 함

  return (
    <div>
      {weatherData ? (
        <div className="flex items-center">
          <img
            src={`https://openweathermap.org/img/w/${weatherData.icon}.png`}
            alt="Weather Icon"
          />
          <p>{weatherData.temp}℃</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

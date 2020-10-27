import React, { useState } from "react";
import { Button } from "reactstrap";

const key = "be197d61a8d4d154bdb54d626e41a007";

const OpenWeather = (props) => {
  const [weatherMain, setWeatherMain] = useState({});
  const [weatherSys, setWeatherSys] = useState({});
  const [weatherWeather, setWeatherWeather] = useState({});
  const [toggle, setToggle] = useState(true);
  const [unit, setUnit] = useState("imperial");

  const fetchOpenWeather = () => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${props.latitude}&lon=${props.longitude}&units=${unit}&appid=${key}`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setWeatherMain(res.main);
        setWeatherSys(res.sys);
        setWeatherWeather(res.weather);
        console.log(res.main.pressure);
      });
  };

  return (
    <div>
      <h1>Weather Outside</h1>
      <ul>
        {/* <li>
          <img
            src={`http://openweathermap.org/img/w/${weatherWeather[0].icon}.png`}
            alt=""
          />
        </li> */}
        <li>{weatherMain.temp_max}</li>
        <li>{weatherMain.temp_min}</li>
        <li>{weatherMain.feels_like}</li>
        <li>{weatherSys.sunrise}</li>
        <li>{weatherSys.sunset}</li>
        {/* <li>{weatherWeather[0].description}</li> */}
      </ul>
      <Button
        onClick={(e) => {
          toggle ? setUnit("imperial") : setUnit("metric");
          fetchOpenWeather();
          setToggle(!toggle);
        }}
      >
        Press for {unit}
      </Button>
    </div>
  );
};

export default OpenWeather;

import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";

const baseUrl = "http://api.openweathermap.org/data/2.5/weather";
// const key = "be197d61a8d4d154bdb54d626e41a007";
const key = "a12a877a0a838f42d4e91341fbbc0ca3";

const OpenWeather = (props) => {
  const [weatherMain, setWeatherMain] = useState("");
  // const [weatherSys, setWeatherSys] = useState("");
  const [weatherWeather, setWeatherWeather] = useState("");
  const [toggle, setToggle] = useState(false);
  const [toggleTwo, setToggleTwo] = useState(false);
  const [unit, setUnit] = useState("imperial");

  const fetchOpenWeather = () => {
    fetch(
      `${baseUrl}?lat=${props.latitude}&lon=${props.longitude}&units=${unit}&appid=${key}`
    )
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        setWeatherMain(res.main);
        // setWeatherSys(res.sys);
        setWeatherWeather(res.weather);
      });
  };

  useEffect(() => {
    fetchOpenWeather();
  }, []);

  return (
    <div style={{ margin: "auto", padding: "10px" }}>
      {toggleTwo ? (
        <div
          id="weatherDiv"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "auto",
          }}
        >
          <h4>Weather Outside</h4>
          <img
            src={`http://openweathermap.org/img/w/${weatherWeather[0].icon}.png`}
            alt=""
            style={{
              height: "5em",
              width: "5em",
            }}
          />
          <p>Weather in your area is {weatherWeather[0].description}.</p>
          <p>High of <b>{weatherMain.temp_max}&#176;</b></p>
          <p>Low of <b>{weatherMain.temp_min}&#176;</b></p>
          <p>Feels like <b>{weatherMain.feels_like}&#176;</b></p>
        </div>
      ) : (
        <></>
      )}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "auto",
        }}
      >
        <Button
          onClick={(e) => {
            e.preventDefault();
            setToggleTwo(true);
            toggle ? setUnit("imperial") : setUnit("metric");
            // console.log to show current toggle
            // console.log(toggle, unit);
            fetchOpenWeather();
            setToggle(!toggle);
          }}
        >
          {toggleTwo ? (
            <span>{toggle ? "Metric" : "Imperial"}</span>
          ) : (
            <span>press for weather</span>
          )}
        </Button>
      </div>
    </div>
  );
};

export default OpenWeather;

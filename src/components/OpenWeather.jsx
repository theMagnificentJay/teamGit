import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";

const baseUrl = "http://api.openweathermap.org/data/2.5/weather";
const key = "be197d61a8d4d154bdb54d626e41a007";

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
        console.log(res);
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
          <hr />
          <img
            src={`http://openweathermap.org/img/w/${weatherWeather[0].icon}.png`}
            alt=""
            style={{
              height: "7em",
              width: "7em",
            }}
          />
          <p>Weather in your area is {weatherWeather[0].description}.</p>
          <p>High of {weatherMain.temp_max}&#176;</p>
          <p>Low of {weatherMain.temp_min}&#176;</p>
          <p>Feels like {weatherMain.feels_like}&#176;</p>
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
            console.log(toggle, unit);
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
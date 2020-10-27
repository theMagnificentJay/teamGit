import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";

const key = "be197d61a8d4d154bdb54d626e41a007";

const OpenWeather = (props) => {
  const [weatherMain, setWeatherMain] = useState("");
  const [weatherWeather, setWeatherWeather] = useState("");
  const [toggle, setToggle] = useState(false);
  const [toggleTwo, setToggleTwo] = useState(false);
  const [unit, setUnit] = useState("imperial");

  const fetchOpenWeather = () => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${props.latitude}&lon=${props.longitude}&units=${unit}&appid=${key}`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setWeatherMain(res.main);
        setWeatherWeather(res.weather);
      });
  };

  useEffect(() => {
    fetchOpenWeather();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "auto",
        padding: "10px",
      }}
    >
      <h4>Weather Outside</h4>
      {toggleTwo ? (
        <div
          id="weatherDiv"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "auto",
            width: "65%",
          }}
        >
          <img
            src={`http://openweathermap.org/img/w/${weatherWeather[0].icon}.png`}
            alt=""
            style={{
              height: "7em",
              width: "7em",
            }}
          />
          <p style={{ textAlign: "center" }}>
            Weather in your area is {weatherWeather[0].description}.
          </p>
          <hr />
          <p>
            High of <b>{weatherMain.temp_max}&#176;</b>
          </p>
          <p>
            Low of <b>{weatherMain.temp_min}&#176;</b>
          </p>
          <p>
            Feels like <b>{weatherMain.feels_like}&#176;</b>
          </p>
        </div>
      ) : (
        <></>
      )}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          marginTop: "50px",
          width: "65%",
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
            <span>press for {toggle ? "metric" : "imperial"}</span>
          ) : (
            <span>press for weather</span>
          )}
        </Button>
      </div>
    </div>
  );
};

export default OpenWeather;

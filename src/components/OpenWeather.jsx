import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";

const key = "be197d61a8d4d154bdb54d626e41a007";

const OpenWeather = (props) => {
  const [weatherMain, setWeatherMain] = useState("");
  const [weatherSys, setWeatherSys] = useState("");
  const [weatherWeather, setWeatherWeather] = useState("");
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

  useEffect(() => {
    fetchOpenWeather();
  }, [props.longitude]);

  return (
    <div style={{ margin: "auto", padding: "10px" }}>
      <h4>Weather Outside</h4>
      <hr />
      {/* <img
        src={`http://openweathermap.org/img/w/${weatherWeather[0].icon}.png`}
        alt=""
      /> */}
      {/* <p>Weather in your area is {weatherWeather[0].description}.</p> */}
      <p>High of {weatherMain.temp_max}&#176;</p>
      <p>Low of {weatherMain.temp_min}&#176;</p>
      <p>Feels like {weatherMain.feels_like}&#176;</p>
      <div style={{ margin: "auto", marginTop: "50px", width: "65%" }}>
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
    </div>
  );
};

export default OpenWeather;

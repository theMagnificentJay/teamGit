import React, { useEffect, useState } from "react";
import NASA from "./components/NASA";
import OpenWeather from "./components/OpenWeather";
import Zomato from "./components/Zomato";
import { Button } from "reactstrap";

function App() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [Toggle, setToggle] = useState(true);
  const [Toggle2, setToggle2] = useState(true);
  // console.log(imageUrl);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }, []);

  useEffect(() => {
    document.title = "Close to Home, Weather and Food";
  }, []);

  function Toggler() {
    setToggle(!Toggle);
  }

  function Toggler2() {
    setToggle2(!Toggle2);
  }

  return (
    <div id="allContainer">
      <div className="mainContainer card">
        <div className="row approw">
          <Button onClick={Toggler} className="btn btn-primary">
            OpenWeather
          </Button>
          <Button onClick={Toggler2} className="btn btn-primary">
            Zomato
          </Button>
        </div>

        <NASA latitude={latitude} longitude={longitude} />

        {Toggle ? (
          <div id="openWeather" className="openWeather card">
            <div className="openWeather-inner">
              <OpenWeather latitude={latitude} longitude={longitude} />
            </div>
          </div>
        ) : (
          <></>
        )}

        {Toggle2 ? (
          <div id="zomato" className="zomato card">
            <div className="zomato-inner">
              <Zomato latitude={latitude} longitude={longitude} />
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default App;

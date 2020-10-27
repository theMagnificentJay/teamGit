import React, { useState, useEffect } from "react";

const baseURL = "https://api.nasa.gov/planetary/earth/assets";
const key = "y3DUrejxMPFNOGtCKPo36l4yaBgHPoNb8kInsRLw";

const NASA = (props) => {
  console.log(props.longitude);
  console.log(props.latitude);
  const [imageUrl, setImageUrl] = useState("");

  const fetchResults = () => {
    let url = `${baseURL}?lon=${props.longitude}&lat=${props.latitude}&cloud_score=true&api_key=${key}`;

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.url);
        setImageUrl(res.url);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchResults();
  }, [props.latitude]);

  return (
    <div
      className="nasaWorkPlz"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    ></div>
  );
};

export default NASA;

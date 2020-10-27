import React, { useState, useEffect } from "react";

const baseURL = "https://api.nasa.gov/planetary/earth/assets";
const key = "y3DUrejxMPFNOGtCKPo36l4yaBgHPoNb8kInsRLw";
const cloud = "&cloud_score=true";

const NASA = (props) => {
  if (props.longitude !== 0 && props.latitude !== 0) {
    console.log(props.longitude);
    console.log(props.latitude);
  }
  const [imageUrl, setImageUrl] = useState("");

  const fetchResults = () => {
    let url = `${baseURL}?lon=${props.longitude}&lat=${props.latitude}&dim=.32${cloud}&api_key=${key}`;
    if (props.longitude !== 0 && props.latitude !== 0) {
      fetch(url)
        .then((res) => res.json())
        .then((res) => {
          if (props.longitude !== 0 && props.latitude !== 0) {
            console.log(res.url);
          }
          setImageUrl(res.url);
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    fetchResults();
  }, [props.longitude]);

  return (
    <div
      className="nasaWorkPlz"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        height: "100%",
        width: "",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        overflow: "hidden",
      }}
    ></div>
  );
};

export default NASA;

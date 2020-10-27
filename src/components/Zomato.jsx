import React, { useState, useEffect } from "react";

const Zomato = (props) => {
  const [restNameOne, setRestNameOne] = useState("");
  const [restCuisineOne, setRestCuisineOne] = useState("");
  const [restNameTwo, setRestNameTwo] = useState("");
  const [restCuisineTwo, setRestCuisineTwo] = useState("");
  const [restNameThree, setRestNameThree] = useState("");
  const [restCuisineThree, setRestCuisineThree] = useState("");
  // legacy for more values
  // const [restNameFour, setRestNameFour] = useState("");
  // const [restCuisineFour, setRestCuisineFour] = useState("");

  const fetchZomato = () => {
    if (props.longitude !== 0 && props.latitude !== 0) {
      fetch(
        `https://developers.zomato.com/api/v2.1/geocode?lat=${props.latitude}&lon=${props.longitude}`,
        {
          method: "GET",
          headers: new Headers({
            Accept: "application/json",
            "user-key": "cdaccae4e26b9c93178bb638864824b4",
          }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          const resturants = data.nearby_restaurants.slice(0, 4);
          setRestNameOne(resturants[0].restaurant.name);
          setRestCuisineOne(resturants[0].restaurant.cuisines);
          setRestNameTwo(resturants[1].restaurant.name);
          setRestCuisineTwo(resturants[1].restaurant.cuisines);
          setRestNameThree(resturants[2].restaurant.name);
          setRestCuisineThree(resturants[2].restaurant.cuisines);
        });
    }
  };

  useEffect(() => {
    fetchZomato();
  });

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
      <h4>Food Near You</h4>
      <p>
        The following restaurants are some of the closest options to your
        current location.
      </p>
      <div>
        <p style={{ fontWeight: "bold" }}>{restNameOne}</p>
        <p>
          <i>Serves: {restCuisineOne}</i>
        </p>
        <p style={{ fontWeight: "bold" }}>{restNameTwo}</p>
        <p>
          <i>Serves: {restCuisineTwo}</i>
        </p>
        <p style={{ fontWeight: "bold" }}>{restNameThree}</p>
        <p>
          <i>Serves: {restCuisineThree}</i>
        </p>
      </div>
    </div>
  );
};

export default Zomato;

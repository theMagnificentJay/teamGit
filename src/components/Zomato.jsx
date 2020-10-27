import React, { useState, useEffect } from "react";

const Zomato = (props) => {
  const [restOne, setRestOne] = useState("");
  const [restTwo, setRestTwo] = useState("");
  const [restThree, setRestThree] = useState("");

  const fetchZomato = () => {
    // TODO:replace lat and lon values with prop values.
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
          const resturants = data.nearby_restaurants.slice(0, 3);
          setRestOne(resturants[0].restaurant.name);
          setRestTwo(resturants[1].restaurant.name);
          setRestThree(resturants[2].restaurant.name);
          // console.log("RestOne", restOne);
          // console.log("RestTwo", restTwo);
          // console.log("RestThree", restThree);
        });
    }
  };

  useEffect(() => {
    fetchZomato();
  });

  return (
    <div style={{ margin: "auto", padding: "10px" }}>
      <h4>Food Near You</h4>
      <hr />
      <p>
        The following restaurants are some of the closest options to your
        current location.
      </p>
      <hr />
      <div style={{ fontWeight: "bold" }}>
        <p>{restOne}</p>
        <p>{restTwo}</p>
        <p>{restThree}</p>
      </div>
    </div>
  );
};

export default Zomato;

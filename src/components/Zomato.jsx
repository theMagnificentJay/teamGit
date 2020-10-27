import React, { useState, useEffect } from "react";

const Zomato = (props) => {
  const [restNameOne, setRestNameOne] = useState("");
  const [restCuisineOne, setRestCuisineOne] = useState("");
  const [restNameTwo, setRestNameTwo] = useState("");
  const [restCuisineTwo, setRestCuisineTwo] = useState("");
  const [restNameThree, setRestNameThree] = useState("");
  const [restCuisineThree, setRestCuisineThree] = useState("");
  const [restNameFour, setRestNameFour] = useState("");
  const [restCuisineFour, setRestCuisineFour] = useState("");

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
          const resturants = data.nearby_restaurants.slice(0, 5);
          setRestNameOne(resturants[0].restaurant.name);
          setRestCuisineOne(resturants[0].restaurant.cuisines);
          setRestNameTwo(resturants[1].restaurant.name);
          setRestCuisineTwo(resturants[0].restaurant.cuisines);
          setRestNameThree(resturants[2].restaurant.name);
          setRestCuisineThree(resturants[0].restaurant.cuisines);
          setRestNameFour(resturants[3].restaurant.name);
          setRestCuisineFour(resturants[0].restaurant.cuisines);
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
        <p>{restNameOne} ; {restCuisineOne}</p>
        <p>{restNameTwo} ; {restCuisineTwo}</p>
        <p>{restNameThree} ; {restCuisineThree}</p>
        <p>{restNameFour} ; {restCuisineFour}</p>
       
      </div>
    </div>
  );
};

export default Zomato;

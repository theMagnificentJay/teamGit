import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";

const Zomato = (props) => {
  const [restNameOne, setRestNameOne] = useState("");
  const [restCuisineOne, setRestCuisineOne] = useState("");
  const [restNameTwo, setRestNameTwo] = useState("");
  const [restCuisineTwo, setRestCuisineTwo] = useState("");
  const [restNameThree, setRestNameThree] = useState("");
  const [restCuisineThree, setRestCuisineThree] = useState("");
  const [restNameFour, setRestNameFour] = useState("");
  const [restCuisineFour, setRestCuisineFour] = useState("");
  const [restaurants, setRestraunts] = useState([]);
  const [toggle, setToggle] = useState(false);

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
          // const resturants = data.nearby_restaurants.slice(0, 5);
          setRestraunts(data.nearby_restaurants.slice(0, 3));
          console.log(restaurants);
          console.log(restaurants[0].restaurant.name);
          // setRestNameOne(resturants[0].restaurant.name);
          // setRestCuisineOne(resturants[0].restaurant.cuisines);
          // setRestNameTwo(resturants[1].restaurant.name);
          // setRestCuisineTwo(resturants[1].restaurant.cuisines);
          // setRestNameThree(resturants[2].restaurant.name);
          // setRestCuisineThree(resturants[2].restaurant.cuisines);
          // setRestNameFour(resturants[3].restaurant.name);
          // setRestCuisineFour(resturants[3].restaurant.cuisines);
        })
        .catch((err) => console.log(err));
    }
  };

  // useEffect(() => {
  //   fetchZomato();
  // }, []);

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
      <hr />
      {toggle ? (
        <div style={{ marginBottom: "3em" }}>
          <p style={{ textAlign: "center" }}>
            The following restaurants are some of the closest options to your
            current location.
          </p>
          <hr />
          <div>
            {restaurants.map((place, index) => (
              <div>
                <p key={index} style={{ textAlign: "center" }}>
                  <b>{place.restaurant.name}</b>
                </p>
                <p style={{ textAlign: "center" }}>
                  <i>{place.restaurant.cuisines}</i>
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <></>
      )}
      <Button
        onClick={(e) => {
          fetchZomato();
          setToggle(!toggle);
        }}
      >
        Press for Restraunts
      </Button>
    </div>
  );
};

export default Zomato;

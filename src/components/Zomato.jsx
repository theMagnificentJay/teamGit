import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";

const Zomato = (props) => {
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
          setRestraunts(data.nearby_restaurants.slice(0, 3));
        })
        .catch((err) => console.log(err));
    }
  };

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
                <p key={index} style={{ textAlign: "center" }}>
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
        className="btn btn-primary"
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

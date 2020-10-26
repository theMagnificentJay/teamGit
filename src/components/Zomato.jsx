import React, { useEffect } from "react";
import { Card, CardText, CardBody } from "reactstrap";
const Zomato = (props) => {
  const fetchZomato = () => {
    fetch(
      `https://developers.zomato.com/api/v2.1/geocode?lat=39.688699&lon=-86.06519`,
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
        // console.log(data);
        // data.nearby_restaurants.slice(0, 3);
        console.log(data.nearby_restaurants.slice(0, 3));
      });
  };
  useEffect(() => {
    fetchZomato();
  }, []);
  return <div></div>;
};
export default Zomato;

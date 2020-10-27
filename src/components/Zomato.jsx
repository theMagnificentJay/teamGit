import React, { useState, useEffect } from 'react';
//import {Card, CardText, CardBody} from 'reactstrap';

const Zomato = (props) => {
  const [restOne, setRestOne]=useState('');
  const [restTwo, setRestTwo]=useState('');
  const [restThree, setRestThree]=useState('');

  const fetchZomato = () => {
   // TODO:replace lat and lon values with prop values.
    fetch(`https://developers.zomato.com/api/v2.1/geocode?lat=39.688699&lon=-86.06519`, {
    method: 'GET',
    headers: new Headers ({
      'Accept': 'application/json',
      'user-key': 'cdaccae4e26b9c93178bb638864824b4'  
    })
  }).then( (res) => res.json())
  .then((data) => {
    const resturants = data.nearby_restaurants.slice(0 ,3)
    console.log(resturants[0]); 
    setRestOne(resturants[0].restaurant);
    setRestTwo(resturants[1].restaurant.name);
    setRestThree(resturants[2].restaurant.name); 
    console.log("RestOne",restOne)
    console.log("RestTwo",restTwo)
    console.log("RestThree",restThree)
 })  
 
}
useEffect(() => {
  fetchZomato();
}, [])
  
  return (
    <div>

    </div>

  );
}

export default Zomato;

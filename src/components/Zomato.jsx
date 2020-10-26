import React from 'react';

const Zomato = (props) => {

  const fetchZomato = () => {
    fetch(`https://developers.zomato.com/api/v2.1/geocode?lat=${props.latitude}&lon=${props.latitude}`, {
    method: 'GET',
    headers: new Headers ({
      'Accept': 'application/json',
      'user-key': 'cdaccae4e26b9c93178bb638864824b4'  
    })
  }).then( (res) => res.json())
  .then((data) => {
    console.log(data);
  })   
}
  
  return (

    <div>
    </div>

  );
}

export default Zomato;

import React, { useState } from 'react';

function OpenWeather(props) {
 const[temperatue, setTemperature] =useState('');
const fetchOpenWeather=()=>{
  fetch(`http://api.openweathermap.org/data/2.5/weather?lat=39.688699&lon=-86.06519&units=imperial&appid=a5e392dda217cc611a0949968b1a6f0f`)
 .then(res=> res.json())
 .then(res =>{
   console.log (res)
   
 })
}
useState(()=>{
  fetchOpenWeather()
})
  return ( 

    <div>
     
    </div>

  );
}

 
export default OpenWeather;

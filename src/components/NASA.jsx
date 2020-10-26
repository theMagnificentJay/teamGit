import React from 'react';

let key = `vuG7MCOAO8PDyiw8H7QWJULgngWRc9lv1eYeWzt1`
let baseURL = `https://api.nasa.gov/planetary/earth/assets?`;
let date = new Date().toISOString().split('T')[0]

function NASA(props) {
  const fetcherFunction = () => {
    fetch(`${baseURL}lon=${props.longitude}&lat=${props.lattitude}&date=${date}&api_key=${key}`)
  }

  return (

    <div>
    </div>

  );
}

export default NASA;

import React, {useState, useEffect, useRef} from 'react';

const baseURL = 'https://api.nasa.gov/planetary/earth/assets';
const key = 'y3DUrejxMPFNOGtCKPo36l4yaBgHPoNb8kInsRLw';

const NASA = (props) => {
  console.log(props.longitude);
  console.log(props.latitude);
  const [imageUrl, setImageUrl] = useState('');

  const fetchResults = () => {
    let url = `${baseURL}?lon=${props.longitude}&lat=${props.latitude}&api_key=${key}`;

    fetch(url)
   .then(res => res.json())
   .then(res => {
     console.log(res);
     setImageUrl(res.url);

   })
  //  .then(data => setResults(data.response.docs))
   .catch(err => console.log(err));
 };
  // fetchResults();
  useEffect(() => {
    fetchResults();
  }, [props.latitude])

  return (
    <div></div>
  )
}

export default NASA;

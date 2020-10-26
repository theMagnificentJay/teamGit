import React, { useEffect } from 'react';
import NASA from './components/NASA';
import OpenWeather from './components/OpenWeather';
import Zomato from './components/Zomato';


function App() {

  useEffect(() => {
    document.title = "Close to Home, Weather and Food";
  }, []);

  return (

    <div>

      <NASA />
      <Zomato />
      <OpenWeather />

    </div>

  );
}

export default App;
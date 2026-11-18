import './App.css';
import BgChanger from './components/bgChanger';
import Counter from './components/counter';
import UpdateProps from './components/UpdateProps';
import React, { useState } from 'react';

function App() {
  /*
  Because Counter.jsx and UpdateProps.jsx are separate sibling components, 
  Counter cannot directly pass data to UpdateProps. 
  
  Store experienceYears in their common parent, App.js, 
  then pass it through props.

  */

  const [experienceYears, setExperienceYears] = useState(0);
  return (

    <div>
      {/* <Counter />
      <UpdateProps 
      expYearProp={experienceYears} 
      incExperienceYearsProp={setExperienceYears} /> */}
      <BgChanger />
    </div>
  );
}

export default App;

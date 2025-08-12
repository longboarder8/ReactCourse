// src/components/Header.jsx

import React from "react";
import Title from "./Title.jsx";  // Task 4: import this component
import Description from "./Description.jsx"; // Task 4: import this component

// Logo served from the public folder (Production only)
// const logoPublicUrl = '/logo512.png';

// We don't need to specify the `props` argument as we are not using them in this component
function Header(props) {
  return (
    <header className="App-header">
      
      {/*       
          Use the <Title /> and <Description /> components
          and pass them the data via `props` or `props.children`.
      */}
      {/*// Task 4 - place Title & Description components inside header tag */} 
      {/*// Task 4 - pass prop appTitle to Title component */}
      <Title appTitle="Welcome To React, Ironhacker!" />
      {/*// Task 4 - pass following string between Description tags */}
      <Description>You are ready to take this to the next level!</Description>
      {props.user}
    </header>
  );
}

// export the component
export default Header;

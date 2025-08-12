// src/components/Title.jsx
// Tasks 1 & 2: create this file

// Import react
import React from 'react';

// Create a function component and set props as the argument
function Title (props) {
  
  return (
    <div>
      <h3>Week 4: Passing Props</h3>
    	<h1 className="App-title">{props.appTitle}</h1>
    </div>
  );

};


// export the component
export default Title;
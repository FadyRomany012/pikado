import React, { useState } from "react";

const Test = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const [Next, setNext] = useState(false);
  let next;
  let element;
  let button;
  if (loggedIn) {
    element = <h1> Hello, Anthony! </h1>;
    button = (
      <button onClick={() => setNext(!Next) & setLoggedIn(!loggedIn)}>
        {loggedIn ? "Log out" : "Log in"}
      </button>
    );
  }
  if (Next) {
    next = <button onClick={() => setLoggedIn(!loggedIn)}>Next</button>;
  }
  return (
    <div>
      <div className="App">
        <h1> Welcome to the app! </h1>

        {button}
        {next}
      </div>
    </div>
  );
};

export default Test;

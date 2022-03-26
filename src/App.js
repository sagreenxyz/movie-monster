import React, { useState } from "react";
import './App.css';

function DisplayIdeas(props) {
  let crazyIdeas = props.ideas.map(idea => <li>{idea}</li>)
  return (
    <div>
      <ul>
        {crazyIdeas}
      </ul>
    </div>
  )
}

function Form() {
  return (
    <div>
      Form Component
    </div>
  )
}

function App() {
  const [ideas, setIdeas] = useState([
    "Movie about a guy who gets bit by a radioactive mole rat",
    "Romcom about two developers over Zoom",
    "Horror film where AWS goes down for 24 hours"
  ]);
  return (
    <div className="App">
      <main>
        <h1>Welcome, Super Awesome Movie Monster Think Tank!</h1>

        <br />

        <h1>Submit your ideas down below:</h1>

        <DisplayIdeas ideas={ideas} />
        <Form />

      </main>
    </div>
  );
}

export default App;

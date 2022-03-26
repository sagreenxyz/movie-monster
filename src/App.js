import { useState } from 'react'

function DisplayIdeas(props) {
  let crazyIdeas = props.ideas.map(idea => <li>{idea}</li>)
  console.log(crazyIdeas)
  return (
    <div>
      <ul>
        {crazyIdeas}
      </ul>
    </div>
  )
}

function App() {
  const [ideas, setIdeas] = useState([
    "Movie about a guy who gets bit by a radioactive mole rat",
    "Romcom about two developers over Zoom",
    "Horror film where AWS goes down for 24 hours"
  ])
  return (
    <main>
      <h1>Welcome, Super Awesome Movie Monster Think Tank!</h1>
      <DisplayIdeas ideas={ideas} />
    </main>
  )
}

export default App;

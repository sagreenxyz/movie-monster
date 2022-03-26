import { useState } from 'react'

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

function IdeasForm(props) {
  let [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    props.addIdeas(input)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setInput(e.target.value)} />
        <button type="submit">Submit your Idea!</button>
      </form>
    </div>
  )
}

function App() {
  const [ideas, setIdeas] = useState([
    "Movie about a guy who gets bit by a radioactive mole rat",
    "Romcom about two developers over Zoom",
    "Horror film where AWS goes down for 24 hours"
  ])

  const addIdeas = (newIdeas) => {
    setIdeas([...ideas, newIdeas])
  }

  return (
    <main>
      <h1>Welcome, Super Awesome Movie Monster Think Tank!</h1>
      <DisplayIdeas ideas={ideas} />
      <h1>Submit your ideas down below</h1>
      <IdeasForm addIdeas={addIdeas} />
    </main>
  )
}

export default App;

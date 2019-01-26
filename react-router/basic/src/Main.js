import React  from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
function Main(){
  return(
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/topics">Topics</Link></li>
        </ul>
        <hr/>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
      </div>
    </Router>
  )
}
function Home(){
  return <h1>Home</h1>
}
function About() {
  return <h1>About</h1>
}
function Topics({match}) {
  return (
    <Router>
      <div>
        <h1>Topics</h1>
        <ul>
          <li><Link to={`${match.url}/what-is-props`}>What is Props</Link></li>
          <li><Link to={`${match.url}/what-is-state`}>What is State</Link></li>
        </ul>
        <Route path={`${match.path}/:topicId`} component={Topic} />
        <Route exact path={match.path} render={()=><div>Choose the topic.</div>} />
      </div>
    </Router>
  );
}
function Topic({match}){
  return(
    <div>
      <h3>{ match.params.topicId }</h3>
    </div>
  )
}
export default Main

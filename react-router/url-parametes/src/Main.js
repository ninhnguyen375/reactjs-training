import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
function Main() {
  const films = [
    {
      filmId: "chu-gau-tinh-nghich",
      film: "Chú Gấu Tinh Nghịch"
    },
    {
      filmId: "iron-man",
      film: "Người Sắt"
    },
    {
      filmId: "lady-bird",
      film: "Lady Bird"
    },
    {
      filmId: "lady-bird",
      film: "Lady Bird"
    },
    {
      filmId: "lady-bird",
      film: "Lady Bird"
    },
    {
      filmId: "lady-bird",
      film: "Lady Bird"
    },
    {
      filmId: "lady-bird",
      film: "Lady Bird"
    },
    {
      filmId: "lady-bird",
      film: "Lady Bird"
    },
    {
      filmId: "lady-bird",
      film: "Lady Bird"
    }
  ];
  return (
    <Router>
      <div>
        <h1>Films</h1>
        <ol>
          {
            films.map((a, index) => {
              return(
                <li key={index}>
                  <Link to={`/${a.filmId}`}>{a.film}</Link>
                </li>
              )
            })
          }
        </ol>
        <Route path="/:filmId" component={Films} />
        <Route path="/:cut" component={GetOut} />
      </div>
    </Router>
  )
}
function GetOut({ match }) {
  return <h1>{match.params.GetOut}</h1>
}
function Films({ match }) {
  return (
    <div>
      <div>filmId : {match.params.filmId}</div>
    </div>
  )
}
export default Main

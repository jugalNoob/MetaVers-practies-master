import React from 'react'
import { Route } from 'react-router-dom'
import Home from "./page/Home"
import Meta from "./page/Meta"

function App() {
  return (
    <div>

      <Route exact path="/">

   <Home/>
      </Route>

      <Route path="/meta">
        <Meta/>
      </Route>
    </div>
  )
}

export default App
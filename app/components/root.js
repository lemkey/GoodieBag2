import React from 'react'
import {Route, Link} from 'react-router-dom'
import AllCandy from './AllCandy'

const Root = () => {


  return (
    <div>
      <nav>
        <ul>
          <li>All Candy</li>
          <li>Home</li>
        </ul>
      </nav>
      <main>
        <h1>Welcome to the Goodie Bag!</h1>
        <Route exact path="/candies" component={AllCandy} />
      </main>
    </div>
  )
}

export default Root

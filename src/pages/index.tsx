import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { SideBarMenu } from 'components/index'
import BookShelfPage from './bookshelf/index'
import Discover from './discover/index'

import './index.scss'

export default function App() {
  return (
    <Router>
      <div className="app">
        <SideBarMenu />
        <div className="app__content">
          <Switch>
            <Route exact path="/">
              <BookShelfPage />
            </Route>
            <Route path="/discover" component={Discover} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

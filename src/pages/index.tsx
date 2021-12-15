import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import BookShelfPage from './bookshelf/index'
import Discover from './discover/index'

import './index.scss'
import { Navigation } from '../utils/data'
import { TabBar } from '../components/index'

export default function App() {
  return (
    <Router>
      <div className="app">
        <div className="app__main">
          <Switch>
            <Route exact path={Navigation.BookShelf}>
              <BookShelfPage />
            </Route>
            <Route path={Navigation.Discover} component={Discover} />
          </Switch>
        </div>
        <div className="app__bottom">
          <TabBar />
        </div>
      </div>
    </Router>
  )
}

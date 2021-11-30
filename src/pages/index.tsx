import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { SideBarMenu } from 'components/index'
import BookShelfPage from './bookshelf/index'
import Discover from './discover/index'

import './index.scss'
import { Navigation } from '../utils/data'

export default function App() {
  return (
    <Router>
      <div className="app">
        <SideBarMenu />
        <div className="app__content">
          <Switch>
            <Route exact path={Navigation.BookShelf}>
              <BookShelfPage />
            </Route>
            <Route path={Navigation.Discover} component={Discover} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import BookShelfPage from './bookshelf/index'
import Discover from './discover/index'

import './index.scss'
import { Navigation } from '../utils/data'
import BookDetail from './bookDetail/index'

export default function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path={Navigation.BookShelf} component={BookShelfPage} />
          <Route exact path={Navigation.Discover} component={Discover} />
          <Route path={Navigation.BOOK} component={BookDetail} />
        </Switch>
      </div>
    </Router>
  )
}

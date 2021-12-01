import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { SideBarMenu, ToggleMenu } from 'components/index'
import BookShelfPage from './bookshelf/index'
import Discover from './discover/index'

import './index.scss'
import { Navigation } from '../utils/data'
import TopBar from '../components/topBar/index'

export default function App() {
  let [openSide, setOpen] = useState(false)
  const toggleClick = () => {
    setOpen(!openSide)
  }
  const toggle = <ToggleMenu click={toggleClick} className="d-lg-none" />
  return (
    <Router>
      <div className="app">
        <div className={`app-wrapper app-wrapper${openSide ? '--open' : '--close'}`}>
          <div className="app__side-bar">
            <SideBarMenu />
          </div>
          <div className="app__main">
            <div className="app__top-bar">
              <TopBar toggle={toggle} />
            </div>
            <div className="app__content">
              <Switch>
                <Route exact path={Navigation.BookShelf}>
                  <BookShelfPage />
                </Route>
                <Route path={Navigation.Discover} component={Discover} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  )
}

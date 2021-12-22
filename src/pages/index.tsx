import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import BookShelfPage from './bookshelf/index'
import Discover from './discover/index'

import './index.scss'
import { Navigation } from '../utils/data'
import BookDetail from './bookDetail/index'
import CategoryPage from './categoryPage/index'
import DiscoverMoreBook from './discoverMoreBook/index'
import BookDetailMore from './bookDetailMore/index'
import Catalogue from './catalogue/index'

export default function App() {
  return (
    <Router>
      <div className="app">
        <Route path={Navigation.BookShelf} component={BookShelfPage} />
        <Route exact path={Navigation.Discover} component={Discover} />
        <Route path={Navigation.BookDetailMore} component={BookDetailMore} />
        <Route exact path={Navigation.BOOK} component={BookDetail} />
        <Route path={Navigation.CategoryMore} component={DiscoverMoreBook} />
        <Route path={Navigation.Category} component={CategoryPage} />
        <Route path={Navigation.Catalogue} component={Catalogue} />
        <Route component={Discover} />
      </div>
    </Router>
  )
}

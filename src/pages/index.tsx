import React, { useState } from 'react'
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
import Chapter from './chapter/index'
import { Toast, ToastContext } from 'components/index'

export default function App() {
  const [showToast, setShowToast] = useState(false)
  const [toast, setToast] = useState('')
  return (
    <Router>
      <ToastContext.Provider value={invokeToast}>
        <div className={`app ${showToast ? 'de-emphasized' : ''}`}>
          <Route exact path={Navigation.BookShelf} component={BookShelfPage} />
          <Route exact path={Navigation.Discover} component={Discover} />
          <Route path={Navigation.BookDetailMore} component={BookDetailMore} />
          <Route exact path={Navigation.BOOK} component={BookDetail} />
          <Route path={Navigation.CategoryMore} component={DiscoverMoreBook} />
          <Route exact path={Navigation.Category} component={CategoryPage} />
          <Route path={Navigation.Catalogue} component={Catalogue} />
          <Route path={Navigation.Chapter} component={Chapter} />
        </div>
      </ToastContext.Provider>
      <Toast showToast={showToast} toast={toast} />
    </Router>
  )
  function invokeToast(toast: string, duration = 1000) {
    setToast(toast)
    setShowToast(true)
    setTimeout(() => {
      setShowToast(false)
    }, duration)
  }
}

import React, { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import BookShelfPage from './bookshelf/index'
import Discover from './discover/index'

import './index.scss'
import { Navigation } from '../utils/data'
import BookDetail from './bookDetail/index'
import CategoryPage from './categoryPage/index'
import Catalogue from './catalogue/index'
import Chapter from './chapter/index'
import { Toast, ToastContext } from 'components/index'
import Search from './search/index'
import BookMore from './bookMore/index'

export default function App() {
  const [showToast, setShowToast] = useState(false)
  const [toast, setToast] = useState('')
  return (
    <Router>
      <ToastContext.Provider value={invokeToast}>
        <div className={`app ${showToast ? 'de-emphasized' : ''}`}>
          <Route exact path={Navigation.BookShelf} component={BookShelfPage} />
          <Route exact path={Navigation.Discover} component={Discover} />
          <Route exact path={Navigation.BOOK} component={BookDetail} />
          <Route exact path={Navigation.Category} component={CategoryPage} />
          <Route path={Navigation.Catalogue} component={Catalogue} />
          <Route path={Navigation.Chapter} component={Chapter} />
          <Route path={Navigation.Search} component={Search} />
          <Route path={Navigation.MoreBook} component={BookMore} />
          <Route exact path={'/index.html'} component={Discover} />
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

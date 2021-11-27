import React from 'react'
import ReactDOM from 'react-dom'
import { FlipBook, SideBarMenu, ToggleMenu } from 'components/index'

const App = function App() {
  return (
    <div>
      <SideBarMenu />
      <FlipBook />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

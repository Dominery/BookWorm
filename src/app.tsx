import React from 'react'
import ReactDOM from 'react-dom'
import { SideBarMenu, ToggleMenu } from 'components/index'

const App = function App() {
  return (
    <div>
      <SideBarMenu />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

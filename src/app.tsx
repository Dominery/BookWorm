import React from 'react'
import ReactDOM from 'react-dom'
import { ToggleMenu } from 'components/index'

const App = function App() {
  return (
    <div>
      <ToggleMenu />
      <p>页面内容 by react</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

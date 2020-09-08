import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { BrowserRouter, Route } from 'react-router-dom'

// Import Styles
import './styles/index.css'
import './styles/tailwind-build.css'

// Import Pages
import Home from './pages/Home'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App>
        <Route exact path='/' component={Home} />
      </App>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

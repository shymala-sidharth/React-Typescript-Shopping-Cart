import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter} from "react-router-dom"
import {Auth0Provider} from "@auth0/auth0-react"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Auth0Provider
  domain='dev-xbqwqyqdhacy06zi.us.auth0.com'
  clientId='W3PhMk3EJ8TxgFRa6dYhB96IB8E2MjL6'
  redirectUri={window.location.origin}>
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  </Auth0Provider>
)

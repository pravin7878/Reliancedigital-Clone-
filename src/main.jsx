import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'
import ContextProvider from './ContextAPI/ContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
      <ContextProvider>
        <Auth0Provider
        
          domain="dev-aogcw1bvi34skfcw.us.auth0.com"
          clientId="iD6jC8klJG67Ejeo0arHPzbN0haogXyB"
          authorizationParams={{
            redirect_uri: window.location.origin
          }}
        >
          <App />
        </Auth0Provider>,
        </ContextProvider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
)

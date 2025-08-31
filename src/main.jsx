import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import Provider from react-redux
import { Provider } from 'react-redux'

// Import the Redux store
import store from './store.js'

// Render the application
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Wrap the App component with Provider to make Redux store accessible */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
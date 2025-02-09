import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@mui/material/styles'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import { store } from './store.js'
import theme from './theme.js';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>

        <App />
      </Provider>
    </ThemeProvider>


  </StrictMode>,
)

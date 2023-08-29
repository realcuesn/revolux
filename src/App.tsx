import './App.css'

import { ThemeProvider } from './components/theme-provider'
import { RouterProvider } from 'react-router-dom'
import router from './router'

function App() {

  return (
    <>
      <ThemeProvider>
        <RouterProvider router={router} ></RouterProvider>
      </ThemeProvider>
    </>
  )
}

export default App

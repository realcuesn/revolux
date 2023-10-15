import './App.css'

import { ThemeProvider } from './components/theme-provider'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import AppTitlebar from './components/app/application/app-titlebar'


function App() {


  return (
    <>
      <ThemeProvider>
        <div className='w-full flex flex-col h-screen px-2.5'>
          <AppTitlebar></AppTitlebar>
          <div className='flex flex-grow overflow-clip h-full '>
            <RouterProvider router={router} ></RouterProvider>
          </div>
        </div>
      </ThemeProvider>
    </>
  )
}

export default App

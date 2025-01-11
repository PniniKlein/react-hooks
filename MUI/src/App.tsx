import { RouterProvider } from 'react-router'
import './App.css'
import { router } from './Router'
import Home from './component/Home'
import { Box, Button } from '@mui/material';
import { Link } from "react-router";

function App() {
   
  return (
    <>
       {/* <Home></Home> */}
       <RouterProvider router={router} />
       {/* <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: 2 }}>
      <Box sx={{ flexGrow: 1 }}>
        <Home />
      </Box>
      <Box>
        <RouterProvider router={router} />
      </Box>
    </Box>  */}
    </>
  )
}

export default App

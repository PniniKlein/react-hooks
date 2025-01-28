import { useReducer, useState } from "react"
import userReducer, { UserContext, UserType } from "./userReducer"
import Login from "./Login"
import Update from "./Update"
import UserName from "./UserName"
import Divider from '@mui/material/Divider';
import { Box, Button } from '@mui/material';
import { RouterProvider } from 'react-router'
import { router } from "../Router"
import NavBar from "./NavBar"
import { Outlet } from "react-router"

const Home = () => {
  let userDefault: UserType = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    address: '',
    phone: ''
  }
  const [user, userDispatch] = useReducer(userReducer, userDefault)
  const [isLogin, setIsLogin] = useState(false)
  return (<>
    <UserContext.Provider value={{ user, userDispatch }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: 2 }}>
        <Box sx={{ flexGrow: 1 }}>
          {!isLogin && <Login setIsLogin={setIsLogin} />}
          {isLogin && <UserName></UserName>}
        </Box>
        <Box>
          <NavBar />
        </Box>
      </Box>
      <Divider />
      {isLogin && <Update></Update>}
    </UserContext.Provider>
    <Outlet />
  </>)


}

export default Home
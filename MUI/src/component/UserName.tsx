import { useContext } from "react"
import { UserContext } from "./userReducer"
import {Avatar,Box,Typography} from '@mui/material';
const UserName = () =>{
 
    const {user} = useContext(UserContext)
    return(<>
        <Box sx={{ display: 'flex', alignItems: 'center',marginBottom:2 }}>
         <Avatar sx={{fontSize:30, width: 50, height: 50 ,marginLeft: 3,marginTop:3, bgcolor: "deepskyblue"}} src="/broken-image.jpg">{user.name[0]}</Avatar>
         <Typography variant="h5" align="left" sx={{ marginTop: 3, marginLeft: 2 }}>{user.name}</Typography>
        </Box>
    </>)
}
export default UserName
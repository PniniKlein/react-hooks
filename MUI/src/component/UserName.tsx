import { useContext } from "react"
import { UserContext } from "./userReducer"
import {Avatar,Box,Typography} from '@mui/material';

const UserName = () =>{
 
    const {user} = useContext(UserContext)
    //console.log(user)
    return(<>
        <Box sx={{ display: 'flex', alignItems: 'center',marginBottom:0 }}>
         <Avatar sx={{fontSize:30, width: 50, height: 50 ,marginLeft: 2,marginTop:1, bgcolor: "deepskyblue"}}>{user.firstName?user.firstName[0]:''}</Avatar>
         <Typography variant="h5" align="left" sx={{ marginTop: 1, marginLeft: 2}}>{user.firstName+" "+user.lastName}</Typography>
        </Box>
    </>)
}
export default UserName
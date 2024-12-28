import { FormEvent, useContext, useRef, useState } from "react"
import { UserContext } from "./userReducer"
import { Button ,Container,Modal,Paper,TextField} from '@mui/material'
import { LoginOutlined } from "@mui/icons-material"
const Login = ({setIsLogin}:{setIsLogin:Function}) =>{
   const {user,userDispatch} = useContext(UserContext)
   const [open, setOpen] = useState(false)
   
   const nameRef = useRef<HTMLInputElement>(null)
   const passwordRef = useRef<HTMLInputElement>(null)

   const handleSubmit = (e:FormEvent) =>{
        e.preventDefault()
        if(!(user.name===nameRef.current?.value+'' && user.password===passwordRef.current?.value+'')){
        userDispatch({type:'CREATE_USER',data:{
         name: nameRef.current?.value || '',
         password: passwordRef.current?.value || ''
        }})}
        setIsLogin(true)
   }

   return(<>
      <Button variant="contained" size="medium" startIcon={<LoginOutlined/>} onClick={()=>setOpen(true)}
              color="primary" sx={{marginTop:2, marginLeft:2}}>LOG IN</Button>
      <Modal
         open={open}
         onClose={() => { setOpen(false) }}
         aria-labelledby="form-modal-title"
         aria-describedby="form-modal-description"
      >
      <Container style={{ position: 'absolute', top: 200, left: 510, maxWidth: '35%' }}>
         <Paper elevation={3} style={{ padding: '20px' }}>
            <form onSubmit={handleSubmit}>
            <TextField label="name" variant="outlined" margin="normal"
                       type="text" inputRef={nameRef} fullWidth></TextField>
            <TextField label="password" variant="outlined" margin="normal"
                       type="password" inputRef={passwordRef} fullWidth></TextField>
            <Button variant="contained" type="submit" fullWidth sx={{marginTop:2}}>LOG IN</Button>
            </form>
          </Paper>
      </Container>
      </Modal>
   </>)
}
export default Login

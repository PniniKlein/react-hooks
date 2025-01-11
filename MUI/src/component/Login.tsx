import axios from "axios"
import { FormEvent, useContext, useRef, useState } from "react"
import { UserContext } from "./userReducer"
import { Button ,Container,Modal,Paper,TextField} from '@mui/material'
import { LoginOutlined } from "@mui/icons-material"
const Login = ({setIsLogin}:{setIsLogin:Function}) =>{
   const {user,userDispatch} = useContext(UserContext)
   const [open, setOpen] = useState(false)
   const [IsIn, setIsIn] = useState<boolean>()
   
   const emailRef = useRef<HTMLInputElement>(null)
   const passwordRef = useRef<HTMLInputElement>(null)

   const signUp = async (e:FormEvent) =>{
      e.preventDefault()
      try {
      const res = await axios.post('http://localhost:3000/api/user/register',
         {
            email: emailRef.current?.value, 
            password: passwordRef.current?.value
         }
      )
      userDispatch({type:'CREATE_USER',data:{
         id:res.data.userId,
         email: emailRef.current?.value || '',
         password: passwordRef.current?.value || ''
        }})
        setIsLogin(true)
      }catch (e) {
         if(axios.isAxiosError(e) && e.status === 422)
            alert('user already sign up')
      }

   }

   const signIn = async (e:FormEvent) =>{
      e.preventDefault()
      try {
      const res = await axios.post('http://localhost:3000/api/user/login',
         {
            email: emailRef.current?.value, 
            password: passwordRef.current?.value
         }
      )
      userDispatch({type:'CREATE_USER',data:res.data.user})
        setIsLogin(true)
      }catch (e) {
         if(axios.isAxiosError(e)&&e.status === 401)
            alert('user dont appear')
      }
   }

   return(<>
      <Button variant="contained" size="medium" onClick={()=>{setIsIn(true),setOpen(true)}}
              color="primary" sx={{margin:2}}>SIGN IN</Button>
      <Button variant="contained" size="medium" onClick={()=>{setIsIn(false),setOpen(true)}}
      color="primary" sx={{margin:2,marginLeft:0}}>SIGN UP</Button>
      <Modal
         open={open}
         onClose={() => { setOpen(false) }}
         aria-labelledby="form-modal-title"
         aria-describedby="form-modal-description"
      >
      <Container style={{ position: 'absolute', top: 200, left: 510, maxWidth: '35%' }}>
         <Paper elevation={3} style={{ padding: '20px' }}>
            <form onSubmit={(e)=>IsIn?signIn(e):signUp(e)}>
            <TextField label="email" variant="outlined" margin="normal"
                       type="text" inputRef={emailRef} fullWidth></TextField>
            <TextField label="password" variant="outlined" margin="normal"
                       type="password" inputRef={passwordRef} fullWidth></TextField>
            <Button variant="contained" type="submit" fullWidth sx={{marginTop:2,marginRight:2}}>SAVE</Button>
            </form>
          </Paper>
      </Container>
      </Modal>
   </>)
}
export default Login

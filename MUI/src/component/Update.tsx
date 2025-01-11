import axios from "axios";
import { FormEvent, useContext, useState } from "react"
import { UserContext, UserType } from "./userReducer"
import { Button, Container, Modal, Paper, TextField } from '@mui/material'
import ModeIcon from '@mui/icons-material/Mode'

const Update = () =>{
    const {user,userDispatch} = useContext(UserContext)
    const [form,setForm]=useState<UserType>(user)
    const [open, setOpen] = useState(false)

    const handleChange = (name:string,value:string)=>{
        setForm({...form,[name]:value})
    }

    const handleSubmit = async (e: FormEvent)=>{
        e.preventDefault()
        try{
            const res = await axios.put('http://localhost:3000/api/user',
              form,
             { headers: {
                'user-id': user.id // כאן אנחנו מוסיפים את כותרת user-id
            }}) 
            userDispatch({
             type:'UPDATE_USER',
             data:form}) 
             setOpen(false)  
        }catch(e){
            if(axios.isAxiosError(e) && e.status === 404)
                alert("user dont find")
        }
    }
    return(<>
        <Button  size="small" onClick={()=>setOpen(true)} //variant="outlined" 
                sx={{ marginLeft:2,marginTop:2}} endIcon={<ModeIcon/>}>UPDATE</Button>
        <Modal
         open={open}
         onClose={() => { setOpen(false) }}
         aria-labelledby="form-modal-title"
         aria-describedby="form-modal-description"
        >
        <Container style={{ position: 'absolute', top: 100, left: 500, maxWidth: '35%' }}>
            <Paper elevation={3} style={{ padding: '20px' }}>
                <form onSubmit={handleSubmit}>
                    <TextField 
                        type="text" id="firstName" value={form.firstName} 
                        onChange={(e)=>handleChange(e.target.id,e.target.value)}
                        label="firstName" variant="outlined" margin="normal" fullWidth>
                    </TextField>
                    <TextField 
                        type="text" id="lastName" value={form.lastName} 
                        onChange={(e)=>handleChange(e.target.id,e.target.value)}
                        label="lastName" variant="outlined" margin="normal" fullWidth>
                    </TextField>
                    <TextField 
                        type="text" id="email" value={form.email} 
                        onChange={(e)=>handleChange(e.target.id,e.target.value)}
                        label="email" variant="outlined" margin="normal" fullWidth>
                    </TextField>
                    <TextField 
                        type="password" id="password" value={form.password} 
                        onChange={(e)=>handleChange(e.target.id,e.target.value)}
                        label="password" variant="outlined" margin="normal" fullWidth>
                    </TextField>
                    <TextField 
                        type="text" id="address" value={form.address} 
                        onChange={(e)=>handleChange(e.target.id,e.target.value)}
                        label="address" variant="outlined" margin="normal" fullWidth>
                    </TextField>
                    <TextField 
                        type="text" id="phone" value={form.phone} 
                        onChange={(e)=>handleChange(e.target.id,e.target.value)}
                        label="phone" variant="outlined" margin="normal" fullWidth>
                    </TextField>
                    <Button variant="contained" type="submit" fullWidth sx={{marginTop:2}}>UPDATE</Button>
                </form>
            </Paper>
        </Container>
        </Modal>
    </>)
}
export default Update
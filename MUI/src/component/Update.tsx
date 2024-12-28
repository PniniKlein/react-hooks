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

    const handleSubmit = (e: FormEvent)=>{
        e.preventDefault()
        userDispatch({
            type:'UPDATE_USER',
            data:form})   
        setOpen(false)
    }
    return(<>
        <Button variant="outlined" size="small" onClick={()=>setOpen(true)}
                sx={{ marginLeft:2}} endIcon={<ModeIcon/>}>UPDATE</Button>
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
                        type="text" id="name" value={form.name} 
                        onChange={(e)=>handleChange(e.target.id,e.target.value)}
                        label="name" variant="outlined" margin="normal" fullWidth>
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
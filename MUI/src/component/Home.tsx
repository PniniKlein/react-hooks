import { useReducer, useState } from "react"
import userReducer,{UserContext,UserType} from "./userReducer"
import Login from "./Login"
import Update from "./Update"
import UserName from "./UserName"



const Home = () =>{
    let userDefault:UserType = {
        name:'Pnini Klein',
        email:'pnini466@gmail.com',
        password:'pk0548574662',
        address:'Jerusalem 33',
        phone:'0548574662'
    }
    const [user,userDispatch] = useReducer(userReducer,userDefault)
    const [isLogin,setIsLogin] = useState(false)
    return(<>
        <UserContext.Provider value={{user,userDispatch}}>
        {!isLogin && <Login setIsLogin={setIsLogin}/>}
        {isLogin && <UserName></UserName>}
        {isLogin && <Update></Update>}
        </UserContext.Provider>
    </>)
    

}

export default Home
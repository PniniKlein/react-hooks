import { createContext, Dispatch } from "react"

export type UserType ={
    name:string
    email?: string,
    password: string,
    address?:string,
    phone?: string,
} 
type Action ={
    type: 'CREATE_USER'|'UPDATE_USER'|'DELETE_USER'
    data: UserType
}

export const UserContext = createContext<{
    user: UserType;
    userDispatch: Dispatch<Action>
}>({
    user:{name:'',email:'',password:'',address:'',phone:''},
    userDispatch:()=>null
})

export default (state: UserType, action:Action) => {
    switch(action.type){
        case 'CREATE_USER':
            return {
                name: action.data.name,
                email: action.data.email? state.email : '',
                password: action.data.password,
                address: action.data.address? state.address:'',
                phone: action.data.phone? state.phone:'',
            }
        case 'UPDATE_USER':
            return action.data
        default:
            return state
    }
}
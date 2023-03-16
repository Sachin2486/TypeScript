import { useState } from "react";

type AuthUser = {

    name:string
    email:string 

}

export const User = () =>{

    const[user,setUser] = useState<AuthUser | null> (null)
    const handleLogin = () =>{

        setUser({
            name: 'Sachin'
            email:'xyz@mail.com'
        })
    }
    const handleLogout = () =>{
        setUser(null) 
    }

    return (

        <div>

            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>

            <div>User name is</div>
            <div>User email is</div>

        </div>

    )
}
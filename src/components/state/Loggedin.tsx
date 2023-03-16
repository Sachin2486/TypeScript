import { useState } from "react"

export const LoggedIn = () =>{


    const [isLoggedIn,setisLoggedIn] = useState(false)

    const handleLogin = () => {

        setisLoggedIn(true)
    }

    const handleLogout = () => {

        setisLoggedIn(false)
    }

    return(

        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logged Out </button>

            <div> User is {isloggedIn ? 'logged in' : 'logged out'} </div>
        </div>
    )
}
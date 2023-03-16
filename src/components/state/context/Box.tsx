import { useContext } from "react"
import { ThemeContext } from "@emotion/react"


export const Box = () =>{

    const theme = useContext(ThemeContext)

    return <div> Theme context</div>
}
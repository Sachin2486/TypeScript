type GreetProps = {

    name:string
    messageCount : number
    isLoggedIn : boolean
    
}

export const Greet = (props: GreetProps) =>{

    return(

       <div>

       <h2> Welcome {props.name}! You have {props.messageCount} {props.isLoggedIn}</h2>

       </div>

    )
}
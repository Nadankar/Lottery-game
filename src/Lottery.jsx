import { useState } from "react"
import { genTicket,sum } from "./helper";
import Ticket from "./Ticket";

export default function Lottery({n=3,winCondition}){
    let [ticket,setTicket]=useState(genTicket(n));
    let isWinning=winCondition(ticket);

    let buyTicket=()=>{
        setTicket(genTicket(3))
    }

    return(
        <div>
            <h1>Lottery game!</h1>
             <Ticket ticketarr={ticket}/><br />
             <button onClick={buyTicket} style={{color:" #1a1a1a", backgroundColor:"skyblue"}}>Buy new Ticket </button>
             <h3 style={{color:"green"}}>{isWinning && "Congrats,you won !"}</h3>
        </div>
        
    )
}
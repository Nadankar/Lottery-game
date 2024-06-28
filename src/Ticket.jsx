import TicketNum from "./TicketNum";
import "./Ticket.css"


export default function Ticket({ticketarr}){
    return(
        <div className="Ticket">
            <p style={{color:" red", fontWeight:500}}>Ticket</p>
            { 
                ticketarr.map((num,idx)=>(
                    <TicketNum num={num} key={idx}/>

                ))
            }

        </div>
    )
}




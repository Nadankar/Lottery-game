
import Lottery from "./Lottery"
import { sum } from "./helper";

function App() {
  let winCondition=(ticket)=>{
    return sum(ticket)===15;
 }
  return (
   <>
   <Lottery winCondition={winCondition}/>
   </>
        
  )
}

export default App

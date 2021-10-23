import React, { useContext } from "react";
import Listitem from "./Listitem";
import { Datacontext } from "./DataProvider";
export default function List (){
    const[todos,setTodos]=useContext(Datacontext)
    const switchComplete =id => {
        const newTodos =[...todos]
        newTodos.forEach((todo,index) =>{
            if(index===id){
                todo.complete=!todo.complete
            }
            setTodos(newTodos)
        })
    }
    return(
    <div id="list-work">
    <h2>Your List Works</h2>
    <div className="list">
            <ul>    
                {todos.map((todo,index) => (
                    <Listitem todo={todo} key={index} id={index} checkComplete={switchComplete}/>
                ))
                }
            </ul>
    </div>
    </div>
    )
}
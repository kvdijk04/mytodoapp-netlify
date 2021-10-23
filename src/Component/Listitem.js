import React,{useContext,useState} from "react";
import { Datacontext } from "./DataProvider";

export default function Listitem ({todo,id,checkComplete}){
    return( 
    <li className={todo.complete? "disabled" : ""}>
        <label htmlFor="id" className={todo.complete ? "active" : ""}>
        <input type="checkbox" id="id" checked={todo.complete} 
        onChange={() => checkComplete(id)}/>
        {todo.title}
        </label>
        <label htmlFor="id" className={todo.complete ? "active" : ""}>
            {todo.Deadline}
        </label>      
    </li>
    )
}
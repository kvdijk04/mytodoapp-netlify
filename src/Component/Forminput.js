import React, {useState, useContext} from "react";
import { Datacontext } from "./DataProvider";
import 'react-datepicker/dist/react-datepicker.css'

export default function Frominput() {
  const[todos,setTodos]=useContext(Datacontext)
  const[todoname,setTodoname]=useState('')
  const[tododeadline,setTododeadline]=useState('');
    const addtodo = e => {
      e.preventDefault()
        const Newitem = {
            Deadline:tododeadline,
            title:todoname,
            Completed:false,
        }
        console.log(Newitem)
        if(todoname=="" || tododeadline ==""){
          alert("Please fill your works and your deadline")
        }else{
        setTodos([...todos,Newitem])
        setTodoname('')
        setTododeadline('')
        }
        
    }
    const[check,setcheck]=useState(false)
    const handlecheckall =() =>{
        const newTodos=[...todos]
        newTodos.forEach(todo => {
            todo.complete =!check
        })
        setTodos(newTodos)
        setcheck(!check)
    }
    const deleteTodo = () => {

        const newTodos=todos.filter(todo => {
              return todo.complete ===false
        })
        setTodos(newTodos)
    }
      return(
        <>
            <h1>TO DO APP</h1>
            <form autoComplete="off">
              <div className="input_todo">
              <input type="text" name="todos" className="namework" id="todos" required placeholder="what needs to do ?"
              value={todoname}  onChange={e=> {setTodoname(e.target.value.toLowerCase())}}
              ></input>
              <input type="date" formart="dd-mm-yyyy" name="todos" id="date"
              value={tododeadline}  onChange={e=> {setTododeadline(e.target.value)}}
              ></input>
              </div>
              <button onClick={addtodo}>Add</button>
            </form> 
            <div className="container">
              <li className="detail">
                <label>
                  <input onClick={handlecheckall} type="checkbox" name="all" id="all"  />ALL
                </label>
              </li>
              <button className="btn_delete" onClick={deleteTodo} id="delete" >Delete All</button>
            </div>
            
        </>
      )    
}
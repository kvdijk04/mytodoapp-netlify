import React,{useState, useEffect, createContext} from "react";
export const Datacontext= createContext();
export const DataProvider =(props) => {
    const[todos,setTodos]=useState([])
        //REFRESH DO NOT LOST DATA
        //GET DATA FROM LOCAL STORAGE
        useEffect (() => {
            const todoStore=JSON.parse(localStorage.getItem('todoStore'))
            if(todoStore) setTodos(todoStore)
            },[])
            //SAVE DATA TO LOCAL STORAGE
            useEffect(() => {
                localStorage.setItem('todoStore',JSON.stringify(todos))
            },[todos])
            

    return(
        <Datacontext.Provider value={[todos,setTodos]}>
            {props.children}
        </Datacontext.Provider>
    )
}
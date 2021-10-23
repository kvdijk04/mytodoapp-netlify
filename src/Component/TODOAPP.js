import React from "react";
import List from './List';
import Frominput from './Forminput';
import { DataProvider } from './DataProvider';

export const TodoApp=() => {
    return (
    <DataProvider>
        <div className="Todo">
            <Frominput />
            <List />    
        </div>
    </DataProvider>
    );
}
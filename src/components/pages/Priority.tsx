import { Importance } from 'models/Importance'
import { Todo } from 'models/Todo'
import {useState} from 'react'
import './Priority.css'

interface Props {
    todo: Todo
    updateImportance: (id: string, importance: Importance) => void
}

export const Priority= ({todo, updateImportance}: Props)=> {

    const parentClass = ['one-active', 'two-active', 'three-active']

    return(
    <span className={"parent " + parentClass[todo.importance-1]}>
        <span onClick={() => updateImportance(todo.id, 1)} className="arrow-one">&#x26A1;</span>
        <span onClick={() => updateImportance(todo.id, 2)} className="arrow-two">&#x26A1;</span>
        <span onClick={() => updateImportance(todo.id, 3)} className="arrow-three">&#x26A1;</span>
    </span>) 
}
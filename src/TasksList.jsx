import { useState, useContext } from 'react'
import { TaskContext } from './App';
import {React} from 'react'
import './App.css'




export default function TasksList() {
    
    const {tareas,deleteTask} = useContext(TaskContext)
  

    return (
        <ul className='p-5 text-center grid grid-cols-4 gap-3  bg-gray-600 text-white'>TasksList
            {tareas.map((task,i) =>{
                return (<li key={i} className='p-2 bg-gray-900 text-left rounded-3xl pb-3'>
                <h1 className='text-lg text-yellow-600'>{task.title}</h1>
                <br/>
                <h2 className=''>{task.description}</h2>
            <button className='bg-red-500 text-white mt-3 px-2 rounded-lg ' onClick={()=>deleteTask(task.id)}>Eliminar</button>
            </li>)}
            )}
        </ul>

    )
}

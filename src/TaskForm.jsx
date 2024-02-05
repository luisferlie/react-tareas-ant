import { useState, useContext } from 'react'
import { TaskContext } from './App';

function TaskForm() {

    const [title, setTitle] = useState('')
    const { tareas, createTask } = useContext(TaskContext)
    

    const handleSubmit = (e) => {
        const id = tareas.length+1
        console.log(id)
        e.preventDefault()
        const newTask = {
            id: id,
            title: title,
            description: "grupo de pedorras"
        }
        setTitle('')
        createTask(newTask)

    }


    return (

        <div>
            <form onSubmit={handleSubmit} className='bg-gray-600 p-3' >
                <input
                    type='text'
                    placeholder='tarea'
                    onChange={(e) => { setTitle(e.target.value) }}
                    value={title}
                    autoFocus


                />
                <button className='bg-black text-white p-2 ml-2 mb-3'
                    type="submit"
                >Agregar</button>
            </form>
        </div>
    )
}

export default TaskForm
import { useState, useEffect } from 'react'

function TodoList() {

    const initialTodo = ['Fare la spesa', 'rifare il letto', 'fare eseritazione'];

    const [tasks, setTasks] = useState(initialTodo);
    const [newTask, setNewTask] = useState('');

    const addTask = e => {
        e.preventDefault();
        // tasks.push(newTask);
        // pulisco l'input user
        const cleanTask = newTask.trim();
        // creo nuovo array per lo state
        const updatedTasks = [...tasks, cleanTask];
        setTasks(updatedTasks);
        // ripuliamo campo user [da var di stato]
        setNewTask('');
    }

    const removeTask = i => {
        const updatedTasks = tasks.filter((task, taskIndex) => {
            return taskIndex !== i
        });
        setTasks(updatedTasks);
    }

    // utilizzo useEffect per gestione filtro
    useEffect(() => {
        console.log("Esecuzione di useEffetc  -  all'avvio e inserimento nuovo task")
    }, [tasks]);

    return (
        <>
            <form onSubmit={addTask}>
                <input type="text"
                    placeholder='Inserisci una attività'
                    value={newTask}
                    onChange={(e) => { setNewTask(e.target.value) }}
                />
                <button type='submit'>Inserisci un nuovo task</button>
            </form>

            {/* //lista dei task */}
            <ul>
                {tasks.map((task, index) => (
                    <li
                        key={index}>
                        {task}
                        <button onClick={() => removeTask(index)}>
                            Elimina
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )

}
export default TodoList

import { useState, useEffect } from 'react'

function TodoList() {

    const initialTodo = ['Fare la spesa', 'rifare il letto', 'fare eseritazione'];

    // stato dell'array completo
    const [tasks, setTasks] = useState(initialTodo);
    // stato del input di inserimento nuovo task
    const [newTask, setNewTask] = useState('');
    // stato del array filtrato
    const [filteredTasks, setFilteredTasks] = useState(tasks);
    // stato del campo di ricerca
    const [search, setSearch] = useState("");

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
        // console.log("Esecuzione di useEffetc  -  all'avvio e cambiamento di var di ricerca")
        setFilteredTasks(
            tasks.filter(task => {
                return task.toLowerCase().includes(search.toLowerCase())
            })
        );
    }, [search, tasks]);

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
                {filteredTasks.map((task, index) => (
                    <li
                        key={index}>
                        {task}
                        <button onClick={() => removeTask(index)}>
                            Elimina
                        </button>
                    </li>
                ))}
            </ul>

            <input type="text"
                placeholder='Cerca'
                value={search}
                onChange={(e) => { setSearch(e.target.value) }}
            />
        </>
    )

}
export default TodoList

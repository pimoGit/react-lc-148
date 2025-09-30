import { useState } from 'react'

function TodoList() {

    const initialTodo = ['Fare la spesa', 'rifare il letto', 'fare eseritazione'];

    const [tasks, setTasks] = useState(initialTodo);
    const [newTask, setNewTask] = useState('');

    const addTask = e => {
        e.preventDefault();
        // tasks.push(newTask);
        const updatedTasks = [...tasks, newTask];
        setTasks(updatedTasks);
    }

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
                {tasks.map((task, i) => (
                    <li
                        key={i}>
                        {task}
                    </li>
                ))}
            </ul>
        </>
    )

}
export default TodoList

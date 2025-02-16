import React, { useState} from 'react'


function ToDoList(){

    
    const [tasks, setTasks] = useState([]);   // Initialize tasks with a default list of tasks
    const [newTask, setNewTask] = useState(""); // Initialize newTask with an empty String. 

    function handleInputChange(event){   //Function to handle input changes
        setNewTask(event.target.value); // Update the newTask state with the current value of the input field. 
    }

    function addTask(){


        if(newTask.trim () !== ""){   // Statement to see if the current input is not whitespaces
        setTasks(t => [...t, newTask]); // Add new tasks to the list of tasks
        setNewTask(""); // Reset the input field after adding the task.
        }
    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i !== index);

        setTasks(updatedTasks);


    }

    function moveTaskUp(index){
        if (index > 0){
            const updatedTasks = [...tasks];

            [updatedTasks[index], updatedTasks[index - 1]] =
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index){
        if (index < tasks.length - 1){
            const updatedTasks = [...tasks];

            [updatedTasks[index], updatedTasks[index + 1]] =
            [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return (<>
    <div className = "to-do-list">
        <h1>To-Do-List</h1>

        <div>
            <input 
            type="text"
            placeholder='Enter a task...'
            value={newTask}
            onChange={handleInputChange}
            />
            <button className="add-button" onClick={addTask}>Add</button>
        </div>

    </div>

    <ol>
        {tasks.map((task, index) => 
        <li key={index}>
            <span className = "text">{task}</span>
            <button className = "delete-button" onClick={() => deleteTask(index)}>
                Delete
            </button>
            <button className = "move-button" onClick={() => moveTaskUp(index)}>
                ⬆️
            </button>
            <button className = "move-button" onClick={() => moveTaskUp(index)}>
                ⬇️
            </button>
        </li>)}
    </ol>
    </>)

}



export default ToDoList;
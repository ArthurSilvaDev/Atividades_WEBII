/* eslint-disable no-unused-vars */
import { useState } from "react"
import React from "react"
import "../components/ToDoList.css"


function ToDoList(){

    const [tasks, setTasks] = useState ([ "Comer café", "Tomar banho", "Passear com o cachorro"]);
    const [newTask, setNewTasks] = useState ("")
    const [tasksFeitas, setTasksFeitas] = useState(["Dar comida pro gato", "Regar as plantas"]);

    function handleInputChange (event){
        setNewTasks(event.target.value)

    }

    function addTask(){
        if (newTask.trim() !== ""){
            setTasks(tasks => [...tasks, newTask])
            setNewTasks("");
        }
    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i!==index)
        setTasks(updatedTasks)


    }

    function completarTask(index){
        const completado = tasks[index]
        setTasksFeitas(tasksFeitas => [...tasksFeitas, completado])
        deleteTask(index)
    }

    function deleteTaskFeita(index){
        const updatedTasksFeitas = tasksFeitas.filter ((_,i) => i!== index)
        setTasksFeitas(updatedTasksFeitas)
    }

    function recuperarTask(index){
        const resgatado = tasksFeitas[index]
        setTasks(tasks =>[...tasks,resgatado])
        deleteTaskFeita(index)

    }

    function moveTaskDown(index){

    }

    return (
        <div className="to-do-list">

            <h1>To-Do-List</h1>
            
            <div>
                
                <input type="text" placeholder="Escreva uma task ..." value={newTask} onChange={handleInputChange}/>
                <button className="add-button" onClick={addTask}>Adicionar</button>
            </div>
            <h1>Tarefas pendentes:</h1>
            <ol>
                {tasks.map((tarefa, index) => 
                <li key={index}>
                    <span className="text">{tarefa}</span>
                    <button className="complete-button" onClick={() => completarTask(index)}>Completado</button>
                    <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
                    
                    
                </li>)}
            </ol>
            <h1>Tarefas concluídas:</h1>
            <ol>
                {tasksFeitas.map((tarefaFeita, index) =>
                    <li key={index}>
                        <span className="textFeita">{tarefaFeita}</span>
                        <button className="recuperar-button" onClick={() =>{recuperarTask(index)}}>Recuperar</button>
                        <button className="delete-button" onClick={() => deleteTaskFeita(index)}> Deletar</button>
                        
                    </li>
                )}
            </ol>

        </div>
        
    );

}
export default ToDoList
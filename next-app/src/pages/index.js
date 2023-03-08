import React from "react";
import TaskList from "./components/taskList";
import TaskBar from "./components/taskBar";
import {useState} from "react";
import '.././styles/Home.module.css'


export default function Home() {
    const [tasks, setTasks] = useState([]);

    const handleAddTask = (newTask) => {
        setTasks([...tasks, newTask]);
    };
  return (
    <>
      <TaskBar onAddTask={handleAddTask}/>
      <TaskList tasks={tasks} />
    </>
  )
}

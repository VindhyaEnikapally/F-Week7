{/* import AddTask from "./AddTask";
import TasksCount from "./TasksCount";
import TasksList from "./TasksList";
import { useState } from "react";

function TaskManager() {
  const [tasks, setTasks] = useState([]);

  // add new task
  const addNewTask = (taskObj) => {
    setTasks([...tasks, taskObj]);
  };
   // Delete task
   const deleteTask=(id) => {setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
};

  // Toggle complete
  const toggleComplete = (id) => {
  console.log("Clicked ID:", id);

  setTasks((prevTasks) =>
    prevTasks.map((task) => {
      if (task.id === id) {
        console.log("Before:", task.completed);
        return { ...task, completed: !task.completed };
      }
      return task;
    })
  );
};


  return (
    <div>
      <h1 className="text-7xl text-blue-300 mb-10">Task Manager</h1>
      <div className="flex justify-around">
        <AddTask addTask={addNewTask} />
        <TasksList tasks={tasks} deleteTask={deleteTask} toggleComplete={toggleComplete}/>
        <TasksCount tasks={tasks} />
      </div>
    </div>
  );
}

export default TaskManager;
*/}

import { useState } from "react";
import AddTask from "./AddTask";
import TasksList from "./TasksList";
import TasksCount from "./TasksCount";

function TaskManager() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskObj) => {
    setTasks((prev) => [...prev, taskObj]);
  };

  //delete task
  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  //toggle complete
  const toggleComplete = (id) => {
  console.log("Clicked ID:", id);

  setTasks((prev) => {
    console.log("Before Update:",prev);
    const updated=prev.map((task) =>
      task.id===id
        ? {...task,completed:!task.completed}:task
    );
    console.log("After Update:", updated);
    return updated;
  });
};

  return (
    <div>
      <h1 className="text-7xl text-blue-300 mb-10">Task Manager</h1>

      <div className="flex justify-around">
        <AddTask addTask={addTask} />

        <TasksList
          tasks={tasks}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
        />

        <TasksCount tasks={tasks} />
      </div>
    </div>
  );
}

export default TaskManager;
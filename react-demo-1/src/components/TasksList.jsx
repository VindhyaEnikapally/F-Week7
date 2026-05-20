function TasksList({ tasks, deleteTask, toggleComplete }) {

  if (tasks.length === 0) {
    return <h3>No Tasks Added</h3>;
  }

  return (
    <div>
      {tasks.map((task) => (
        <div
          key={task.id}
          style={{
            border: "1px solid gray",
            padding: "15px",
            margin: "10px 0",
            backgroundColor: task.completed ? "#d1fae5" : "white",
            textDecoration: task.completed ? "line-through" : "none",
            opacity: task.completed ? 0.6 : 1,
          }}
        >
          <img src={task.image} alt={task.title} width="150" />

          <h3>{task.title}</h3>
          <p><b>Brand:</b> {task.brand}</p>
          <p>{task.description}</p>
          <p><b>Price:</b> {task.price}</p>
          <p><b>Priority:</b> {task.priority}</p>

          <button
            onClick={() => toggleComplete(task.id)}
            style={{ marginRight: "10px" }}
          >
            {task.completed ? "Undo" : "Complete"}
          </button>

          <button onClick={() => deleteTask(task.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default TasksList;
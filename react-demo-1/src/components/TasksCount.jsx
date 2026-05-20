function TasksCount({ tasks }) {
  const completed = tasks.filter((task) => task.completed).length;

  return (
    <div>
      <h3>
        Total Tasks: {tasks.length} | Completed: {completed}
      </h3>
    </div>
  );
}

export default TasksCount;
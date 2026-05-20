import { useState } from "react";

function AddTask({ addTask }) {
  const [title,setTitle]=useState("");
  const [priority,setPriority]=useState("Low");
  const [error,setError]=useState("");

  const handleSubmit=(e) => {
    e.preventDefault();
    if (!title.trim()) {
      setError("Title is required");
      return;
    }
    if (title.length < 3) {
      setError("Minimum 3 characters required");
      return;
    }
    const newTask={
      id: Date.now(),
      title,
      priority,
      brand: "Demo Brand",
      description: "Sample product description",
      price: "₹999",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      completed: false,
    };
    addTask(newTask);

    //clr form
    setTitle("");
    setPriority("Low");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter product name" value={title} onChange={(e) => setTitle(e.target.value)}/>
      {error && <p style={{color:"red"}}>{error}</p>}
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default AddTask;




















{/*import { useForm } from "react-hook-form";

function AddTask({ addNewTask }) {
  const { register, handleSubmit, reset } = useForm();

  const onFormSubmit = (taskObj) => {
    addNewTask(taskObj); // call parent function
    reset(); // clear input
  };

  return (
    <div>
      <h3 className="text-4xl text-amber-300">Add Task</h3>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <div>
          <input
            type="text"
            {...register("taskName", { required: true })}
            className="border px-3 py-2"
            placeholder="Enter task name"
          />
        </div>
        <button className="bg-blue-400 text-lime-100 px-3 py-2 mt-2">Add</button>
      </form>
    </div>
  );
}

export default AddTask;
*/}
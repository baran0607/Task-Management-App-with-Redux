import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask, toggleTaskStatus } from "../actions/taskActions";
import "./TaskComponent.css";

const Todo = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);

  const [taskText, setTaskText] = useState("");

  const AddTask = () => {
    if (taskText.trim()) {
      dispatch(addTask(taskText));
      setTaskText("");
    }
  };

  const DeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const ToggleTaskStatus = (taskId) => {
    dispatch(toggleTaskStatus(taskId));
  };

  return (
    <>
      <div className="task-container">
        <h2>Task Management</h2>
        <div className="task-form">
          <input
            type="text"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            placeholder="Enter a task"
          />
          <button onClick={AddTask}>Add Task</button>
        </div>

        <div className="task-list">
          {tasks.map((task) => (
            <div
              key={task.id}
              className={`task-item ${task.completed ? "completed" : ""}`}
            >
              <span onClick={() => ToggleTaskStatus(task.id)}>{task.text}</span>
              <button
                className="delete-btn"
                onClick={() => DeleteTask(task.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Todo;

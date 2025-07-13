import React, { useState } from 'react';

function TaskForm({ setTasks }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '') return;

    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };

    setTasks((prev) => [...prev, newTask]);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
      <input
        type="text"
        placeholder="Enter task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;

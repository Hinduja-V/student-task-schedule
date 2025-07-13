import React from 'react';

function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li style={{ display: 'flex', justifyContent: 'space-between' }}>
      <span
        style={{
          textDecoration: task.completed ? 'line-through' : 'none',
          cursor: 'pointer'
        }}
        onClick={() => onToggle(task.id)}
      >
        {task.title}
      </span>
      <button onClick={() => onDelete(task.id)}>❌</button>
    </li>
  );
}

export default TaskItem;

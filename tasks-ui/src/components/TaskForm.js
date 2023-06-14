import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [title, setTitle] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (title.trim() !== '') {
      addTask(title);
      setTitle('');
    }
  };

  return (
    <form className="task-form" onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Add a task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;

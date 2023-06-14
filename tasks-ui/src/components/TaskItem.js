import React, { useState } from 'react';

function TaskItem({ task, updateTask, deleteTask }) {
  const [editing, setEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(task.title);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleCancelClick = () => {
    setEditing(false);
    setUpdatedTitle(task.title);
  };

  const handleSaveClick = () => {
    if (updatedTitle.trim() !== '') {
      updateTask(task._id, updatedTitle);
      setEditing(false);
    }
  };

  const handleDeleteClick = () => {
    deleteTask(task._id);
  };

  return (
    <li className="task-item">
      {editing ? (
        <input
          type="text"
          value={updatedTitle}
          onChange={(e) => setUpdatedTitle(e.target.value)}
        />
      ) : (
        <span>{task.title}</span>
      )}
      <div className="task-item-buttons">
        {editing ? (
          <>
            <button className="save-button" onClick={handleSaveClick}>
              Save
            </button>
            <button className="cancel-button" onClick={handleCancelClick}>
              Cancel
            </button>
          </>
        ) : (
          <>
            <button className="edit-button" onClick={handleEditClick}>
              Edit
            </button>
            <button className="delete-button" onClick={handleDeleteClick}>
              Delete
            </button>
          </>
        )}
      </div>
    </li>
  );
}

export default TaskItem;

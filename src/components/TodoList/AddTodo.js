import React, { useState } from 'react';
import { IconButton, InputBase, Paper } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { v4 as uuidv4 } from 'uuid';

function AddTodo ({ onAdd }) {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim()) {
      onAdd({
        id: uuidv4(),
        content,
        completed: false,
        starred: false,
        createdAt: new Date().toISOString(),
      });
      setContent('');
    }
  };

  return (
    <div className="vintage-item mb-6">
      <form onSubmit={handleSubmit} className="flex items-center px-3">
        <InputBase
          fullWidth
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Add a new task..."
          className="vintage-input py-3 text-sm"
        />
        <IconButton 
          type="submit" 
          className="text-amber-700 hover:text-amber-900 transition-colors"
          size="small"
        >
          <AddIcon />
        </IconButton>
      </form>
    </div>
  );
};

export default AddTodo; 
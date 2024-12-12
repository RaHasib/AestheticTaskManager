import React, { useState } from 'react';
import { IconButton, InputBase } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { v4 as uuidv4 } from 'uuid';

function AddTodo({ onAdd }) {
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
        <form onSubmit={handleSubmit} className="flex gap-2 items-center">
          <InputBase
              fullWidth
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Add a new task..."
              className="vintage-input"
              sx={{
                borderBottom: 'none',
                outline: 'none',
                padding: '0.5rem',
              }}
          />
          <IconButton
              type="submit"
              className="text-amber-700 hover:text-amber-900 transition-colors"
              size="medium"
          >
            <AddIcon />
          </IconButton>
        </form>
      </div>
  );
}

export default AddTodo;
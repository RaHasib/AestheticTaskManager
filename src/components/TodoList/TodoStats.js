import React from 'react';
import { Button } from '@mui/material';

function TodoStats({ filteredCount, completedCount, hasItems, onClearCompleted }) {
  return (
    <div className="mb-4 flex justify-between text-sm text-gray-500">
      <span>
        {filteredCount} task(s) • {completedCount} completed
      </span>
      {hasItems && (
        <Button
          size="small"
          onClick={onClearCompleted}
          className="text-red-500 hover:text-red-700"
        >
          Clear Completed
        </Button>
      )}
    </div>
  );
};

export default TodoStats; 
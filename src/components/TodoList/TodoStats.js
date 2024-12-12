import React from 'react';
import { Button } from '@mui/material';

function TodoStats({ filteredCount, completedCount, hasItems, onClearCompleted }) {
  return (
    <div className="mb-4 flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-0 text-sm text-gray-500">
      <span className="text-center sm:text-left">
        {filteredCount} task(s) • {completedCount} completed
      </span>
      {hasItems && (
        <Button
          size="small"
          onClick={onClearCompleted}
          className="text-red-500 hover:text-red-700 w-full sm:w-auto"
        >
          Clear Completed
        </Button>
      )}
    </div>
  );
};

export default TodoStats; 
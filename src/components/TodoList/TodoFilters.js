import React from 'react';
import { Select, MenuItem, TextField } from '@mui/material';
import { CATEGORIES } from '@/constants/categories';

function TodoFilters ({ filter, setFilter }) {
  return (
    <div className="mb-4 flex flex-col sm:flex-row gap-2 border-none">
      <div className="flex gap-2 flex-1 flex-wrap">
        <Select
          size="small"
          value={filter.category}
          onChange={(e) => setFilter(prev => ({...prev, category: e.target.value}))}
          className="min-w-[110px] flex-1"
        >
          <MenuItem value="ALL">All Categories</MenuItem>
          {Object.entries(CATEGORIES).map(([key, {label}]) => (
            <MenuItem key={key} value={key}>{label}</MenuItem>
          ))}
        </Select>

        <Select
          size="small"
          value={filter.status}
          onChange={(e) => setFilter(prev => ({...prev, status: e.target.value}))}
          className="min-w-[110px] flex-1"
        >
          <MenuItem value="ALL">All Status</MenuItem>
          <MenuItem value="ACTIVE">Active</MenuItem>
          <MenuItem value="COMPLETED">Completed</MenuItem>
        </Select>
      </div>

      <TextField
        size="small"
        placeholder="Search tasks..."
        value={filter.search}
        onChange={(e) => setFilter(prev => ({...prev, search: e.target.value}))}
        className="w-full sm:w-auto sm:min-w-[200px]"
      />
    </div>
  );
};

export default TodoFilters;
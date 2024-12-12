import React from 'react';
import { Select, MenuItem, TextField } from '@mui/material';
import { CATEGORIES } from '@/constants/categories';

function TodoFilters ({ filter, setFilter }) {
  return (
      <div className="mb-4 flex flex-wrap gap-2 border-none">
          <Select
              size="small"
              value={filter.category}
              onChange={(e) => setFilter(prev => ({...prev, category: e.target.value}))}
              className="min-w-[120px]"
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
              className="min-w-[120px]"
          >
              <MenuItem value="ALL">All Status</MenuItem>
              <MenuItem value="ACTIVE">Active</MenuItem>
              <MenuItem value="COMPLETED">Completed</MenuItem>
          </Select>

          <TextField
              size="small"
              placeholder="Search tasks..."
              value={filter.search}
              onChange={(e) => setFilter(prev => ({...prev, search: e.target.value}))}
              className="min-w-[200px]"
          />
      </div>
  );
};

export default TodoFilters;
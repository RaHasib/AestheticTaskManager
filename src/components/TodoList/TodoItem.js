import React, { useState } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Checkbox, IconButton, Tooltip } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import LabelIcon from '@mui/icons-material/Label';
import { Chip, Menu, MenuItem } from '@mui/material';
import { CATEGORIES } from '@/constants/categories';

function TodoItem ({ id, content, completed, starred, category, onDelete, onToggle, onStar, onCategoryChange }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleCategoryClick = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleCategoryClose = (selectedCategory = null) => {
    if (selectedCategory) {
      onCategoryChange(id, selectedCategory);
    }
    setAnchorEl(null);
  };

  const handleCheckboxClick = (event) => {
    event.stopPropagation();
    onToggle(id);
  };

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      style={style}
      className={`
        vintage-item group flex items-center gap-2
        ${isDragging ? 'vintage-item-dragging shadow-xl' : ''}
      `}
    >
      <div 
        {...listeners}
        className="p-1.5 cursor-move opacity-40 hover:opacity-100 transition-all duration-300
          rounded-md hover:bg-[#065125]/10 group-hover:opacity-70"
      >
        <DragIndicatorIcon 
          className="vintage-icon" 
          fontSize="small" 
        />
      </div>
      
      <Checkbox
        checked={completed}
        onChange={handleCheckboxClick}
        onClick={(e) => e.stopPropagation()}
        size="small"
        className="text-[#065125]"
      />
      
      <div className="flex-grow flex items-center gap-2">
        <span className={`
          text-sm font-serif transition-all duration-200
          ${completed ? 'line-through text-[#065125]/50' : 'text-[#2C1810]'}
        `}>
          {content}
        </span>
        {category && (
          <Chip
            size="small"
            label={CATEGORIES[category].label}
            className="vintage-chip"
            style={{
              backgroundColor: CATEGORIES[category].lightBg,
              color: CATEGORIES[category].bgColor,
              borderColor: CATEGORIES[category].bgColor
            }}
          />
        )}
      </div>

      <div className="flex items-center gap-1">
        <Tooltip title="Add Category" arrow>
          <IconButton 
            size="small" 
            onClick={handleCategoryClick}
            className="vintage-icon"
          >
            <LabelIcon fontSize="small" />
          </IconButton>
        </Tooltip>

        <Tooltip title={starred ? "Unstar" : "Star"} arrow>
          <IconButton
            onClick={() => onStar(id)}
            size="small"
            className={`
              transition-colors
              ${starred ? 'text-[#DDA033]' : 'vintage-icon'}
            `}
          >
            {starred ? <StarIcon fontSize="small" /> : <StarBorderIcon fontSize="small" />}
          </IconButton>
        </Tooltip>
        
        <Tooltip title="Delete" arrow>
          <IconButton
            onClick={() => onDelete(id)}
            size="small"
            className="vintage-icon hover:text-[#E2532F]"
          >
            <DeleteOutlineIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </div>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => handleCategoryClose()}
        elevation={1}
        className="mt-1"
      >
        {Object.entries(CATEGORIES).map(([key, { label, bgColor, lightBg }]) => (
          <MenuItem 
            key={key} 
            onClick={() => handleCategoryClose(key)}
            selected={category === key}
            className="text-sm"
            style={{
              backgroundColor: category === key ? lightBg : 'transparent'
            }}
          >
            <LabelIcon 
              className="mr-2" 
              fontSize="small"
              style={{ color: bgColor }}
            />
            <span style={{ color: bgColor }}>
              {label}
            </span>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default TodoItem; 
import React, { useState } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Checkbox, IconButton, Box, Typography, Menu, MenuItem } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import LabelIcon from '@mui/icons-material/Label';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Chip } from '@mui/material';
import { CATEGORIES } from '@/constants/categories';

function TodoItem({ id, content, completed, starred, category, onDelete, onToggle, onStar, onCategoryChange }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const isLongText = content.length > 40; 

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

  const handleExpandClick = (e) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ 
    id,
    transition: {
      duration: 150,
      easing: 'cubic-bezier(0.25, 1, 0.5, 1)'
    }
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    touchAction: 'none',
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`
        vintage-item group
        ${isDragging ? 'vintage-item-dragging shadow-xl opacity-50' : ''}
        touch-none
      `}
      {...attributes}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: { xs: 0.5, sm: 1 },
          width: '100%',
          p: { xs: 0.5, sm: 1 },
          minHeight: isExpanded ? 'auto' : '48px'
        }}
      >

        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: { xs: 0.5, sm: 1 }, 
          flexShrink: 0,
          height: '24px' 
        }}>
          <div {...listeners} className="p-1 cursor-move opacity-40 hover:opacity-100 transition-all duration-300
            rounded-md hover:bg-[#065125]/10 group-hover:opacity-70 touch-none select-none"
          >
            <DragIndicatorIcon sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }} />
          </div>

          <Checkbox
            checked={completed}
            onChange={handleCheckboxClick}
            onClick={(e) => e.stopPropagation()}
            size="small"
            sx={{ 
              color: '#065125',
              padding: { xs: '2px', sm: '4px' }
            }}
          />
        </Box>


        <Box sx={{
          flex: '1 1 auto',
          minWidth: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: 0.5
        }}>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'flex-start', 
            gap: 1,
            minHeight: '24px',
            flexWrap: { xs: 'wrap', sm: 'nowrap' } 
          }}>
            <Typography
              variant="body2"
              sx={{
                fontFamily: 'serif',
                textDecoration: completed ? 'line-through' : 'none',
                color: completed ? 'rgba(6, 81, 37, 0.5)' : '#2C1810',
                overflow: 'hidden',
                textOverflow: isExpanded ? 'clip' : 'ellipsis',
                whiteSpace: isExpanded ? 'normal' : 'nowrap',
                fontSize: { xs: '0.875rem', sm: '1rem' },
                flex: 1,
                minWidth: 0,
                lineHeight: '1.4',
                mt: '2px'
              }}
            >
              {content}
            </Typography>

            {isLongText && (
              <IconButton
                size="small"
                onClick={handleExpandClick}
                className="expand-button"
                sx={{
                  width: '20px',
                  height: '20px',
                  marginTop: '2px',
                  color: 'text.secondary',
                  flexShrink: 0,
                  '&:hover': {
                    color: 'text.primary',
                    backgroundColor: 'rgba(6, 81, 37, 0.04)'
                  }
                }}
              >
                {isExpanded ? (
                  <KeyboardArrowUpIcon sx={{ fontSize: '1rem' }} />
                ) : (
                  <KeyboardArrowDownIcon sx={{ fontSize: '1rem' }} />
                )}
              </IconButton>
            )}

            {category && (
              <Chip
                size="small"
                label={CATEGORIES[category].label}
                sx={{
                  alignSelf: 'flex-start',
                  height: '20px',
                  fontSize: '0.75rem',
                  backgroundColor: CATEGORIES[category].lightBg,
                  color: CATEGORIES[category].bgColor,
                  border: 1,
                  borderColor: CATEGORIES[category].bgColor,
                  borderRadius: '10px',
                  flexShrink: 0,
                  display: { 
                    xs: isExpanded ? 'flex' : 'none', 
                    sm: 'flex' 
                  },
                  order: { xs: 3, sm: 2 }, 
                  ml: { xs: 0, sm: 1 },
                  mt: { xs: 1, sm: '2px' }, 
                  '& .MuiChip-label': {
                    px: 1
                  }
                }}
              />
            )}
          </Box>
        </Box>

        {/* Right section: Action buttons */}
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          gap: { xs: 0.25, sm: 0.5 },
          flexShrink: 0,
          height: '24px' 
        }}>
          <IconButton
            size="small"
            onClick={handleCategoryClick}
            sx={{ 
              padding: { xs: '2px', sm: '4px' },
              color: category ? CATEGORIES[category].bgColor : 'inherit'
            }}
          >
            <LabelIcon sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }} />
          </IconButton>

          <IconButton
            onClick={() => onStar(id)}
            size="small"
            sx={{ 
              padding: { xs: '2px', sm: '4px' },
              color: starred ? '#DDA033' : 'inherit'
            }}
          >
            {starred ? (
              <StarIcon sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }} />
            ) : (
              <StarBorderIcon sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }} />
            )}
          </IconButton>

          <IconButton
            onClick={() => onDelete(id)}
            size="small"
            sx={{ 
              padding: { xs: '2px', sm: '4px' },
              '&:hover': { color: '#E2532F' }
            }}
          >
            <DeleteOutlineIcon sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }} />
          </IconButton>
        </Box>
      </Box>

      {/* Updated Category Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => handleCategoryClose()}
        elevation={1}
        sx={{
          '& .MuiPaper-root': {
            minWidth: 180,
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }
        }}
      >
        <MenuItem 
          onClick={() => handleCategoryClose(null)}
          selected={!category}
          sx={{
            fontSize: '0.875rem',
            py: 1,
            '&.Mui-selected': {
              backgroundColor: 'rgba(6, 81, 37, 0.08)'
            }
          }}
        >
          <Box sx={{ 
            width: 20, 
            height: 20, 
            mr: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <LabelIcon 
              fontSize="small"
              sx={{ color: 'text.secondary', opacity: 0.5 }}
            />
          </Box>
          <span style={{ color: 'text.secondary' }}>
            No Category
          </span>
        </MenuItem>

        {Object.entries(CATEGORIES).map(([key, { label, bgColor, lightBg }]) => (
          <MenuItem 
            key={key} 
            onClick={() => handleCategoryClose(key)}
            selected={category === key}
            sx={{
              fontSize: '0.875rem',
              py: 1,
              backgroundColor: category === key ? lightBg : 'transparent',
              '&:hover': {
                backgroundColor: category === key ? lightBg : 'rgba(6, 81, 37, 0.04)'
              },
              '&.Mui-selected': {
                backgroundColor: lightBg
              }
            }}
          >
            <Box sx={{ 
              width: 20, 
              height: 20, 
              mr: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <LabelIcon 
                fontSize="small"
                sx={{ color: bgColor }}
              />
            </Box>
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
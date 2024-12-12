import React from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay,
  TouchSensor,
} from '@dnd-kit/core';
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';
import TodoFilters from './TodoFilters';
import TodoStats from './TodoStats';
import { Collapse } from '@mui/material';
import { TransitionGroup } from 'react-transition-group';
import { useTodoList } from '@/hooks/useTodoList';

function TodoList() {
  const {
    items,
    setItems,
    activeId,
    activeItem,
    filter,
    filteredItems,
    setFilter,
    handleAdd,
    handleDelete,
    handleToggle,
    handleStar,
    handleCategoryChange,
    handleDragStart,
    handleDragEnd,
    handleDragCancel,
  } = useTodoList();

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      }
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 200,
        tolerance: 5,
      }
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
      <div
          className={`vintage-container rounded-md p-3 sm:p-6 flex flex-col ${
              filteredItems.length === 0 ? 'justify-center text-center' : 'justify-start'
          }`}
          style={{
              minHeight: '60vh',
              maxHeight: { xs: 'calc(100vh - 120px)', sm: 'calc(100vh - 160px)' }
          }}
      >
        <div className="flex-shrink-0 pb-4">
          <AddTodo onAdd={handleAdd}/>
          <TodoFilters filter={filter} setFilter={setFilter}/>
          <TodoStats
              filteredCount={filteredItems.length}
              completedCount={items.filter(i => i.completed).length}
              hasItems={items.length > 0}
              onClearCompleted={() => setItems(prev => prev.filter(item => !item.completed))}
          />
        </div>

        <div className="flex-grow overflow-y-auto pr-2">
          <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              onDragCancel={handleDragCancel}
          >
            <SortableContext
                items={filteredItems.map(item => item.id)}
                strategy={verticalListSortingStrategy}
            >
              <TransitionGroup>
                {filteredItems.length === 0 ? (
                    <Collapse>
                      <div className="text-center text-gray-400 py-12 flex flex-col items-center gap-4">
                        <span className="text-4xl">✨</span>
                        {items.length === 0 ?
                            "Start organizing your tasks with elegance" :
                            "No matching tasks found"}
                        <p className="text-sm text-gray-400">
                          {items.length === 0 ? "Add your first task above" : "Try adjusting your filters"}
                        </p>
                      </div>
                    </Collapse>
                ) : (
                    filteredItems.map(item => (
                        <Collapse key={item.id}>
                          <TodoItem
                              id={item.id}
                              content={item.content}
                              completed={item.completed}
                              starred={item.starred}
                              category={item.category}
                              onDelete={handleDelete}
                              onToggle={handleToggle}
                              onStar={handleStar}
                              onCategoryChange={handleCategoryChange}
                          />
                        </Collapse>
                    ))
                )}
              </TransitionGroup>
            </SortableContext>

            <DragOverlay>
              {activeId && activeItem && (
                  <TodoItem
                      {...activeItem}
                      onDelete={handleDelete}
                      onToggle={handleToggle}
                      onStar={handleStar}
                      onCategoryChange={handleCategoryChange}
                  />
              )}
            </DragOverlay>
          </DndContext>
        </div>
      </div>
  );
};

export default TodoList; 
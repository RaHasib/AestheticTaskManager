import { useState, useEffect, useCallback } from 'react';
import { arrayMove } from '@dnd-kit/sortable';

const defaultFilter = {
  category: 'ALL',
  status: 'ALL',
  search: '',
};

export const useTodoList = () => {
  const [items, setItems] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const [filter, setFilter] = useState(defaultFilter);

  useEffect(() => {
    if (typeof window !== 'undefined' && localStorage) {
      const storedItems = JSON.parse(localStorage.getItem('todoItems')) || [];
      setItems(storedItems);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && localStorage) {
      localStorage.setItem('todoItems', JSON.stringify(items));
    }
  }, [items]);

  const handleDragStart = useCallback((event) => {
    setActiveId(event.active.id);
  }, []);

  const handleDragEnd = useCallback((event) => {
    const { active, over } = event;
    
    if (over && active.id !== over.id) {
      const oldIndex = items.findIndex(item => item.id === active.id);
      const newIndex = items.findIndex(item => item.id === over.id);
      
      if (oldIndex !== -1 && newIndex !== -1) {
        setItems(arrayMove(items, oldIndex, newIndex));
      }
    }
    setActiveId(null);
  }, [items]);

  const handleAdd = useCallback((newTodo) => {
    setItems(prev => [{ ...newTodo, starred: false }, ...prev]);
  }, []);

  const handleDelete = useCallback((id) => {
    setItems(prev => prev.filter(item => item.id !== id));
  }, []);

  const handleToggle = useCallback((id) => {
    setItems(prev => prev.map(item =>
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  }, []);

  const handleStar = useCallback((id) => {
    setItems(prev => {
      const newItems = prev.map(item =>
        item.id === id ? { ...item, starred: !item.starred } : item
      );
      return newItems.sort((a, b) => b.starred - a.starred);
    });
  }, []);

  const handleCategoryChange = useCallback((id, category) => {
    setItems(prev => prev.map(item =>
      item.id === id ? { ...item, category: category || null } : item
    ));
  }, []);

  const filteredItems = items.filter(item => {
    const matchesCategory = filter.category === 'ALL' || item.category === filter.category;
    const matchesStatus = filter.status === 'ALL' 
      || (filter.status === 'COMPLETED' && item.completed)
      || (filter.status === 'ACTIVE' && !item.completed);
    const matchesSearch = item.content.toLowerCase().includes(filter.search.toLowerCase());
    
    return matchesCategory && matchesStatus && matchesSearch;
  });

  const activeItem = activeId ? items.find(item => item.id === activeId) : null;

  return {
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
    handleDragCancel: () => setActiveId(null),
  };
};
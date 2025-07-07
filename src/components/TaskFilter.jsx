import React from 'react';

const TaskFilter = ({ currentFilter, onFilterChange, taskCounts }) => {
  const filters = [
    { 
      key: 'all', 
      label: 'All Tasks', 
      count: taskCounts.all,
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      color: 'blue'
    },
    { 
      key: 'pending', 
      label: 'Pending', 
      count: taskCounts.pending,
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'orange'
    },
    { 
      key: 'completed', 
      label: 'Completed', 
      count: taskCounts.completed,
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      color: 'green'
    }
  ];

  const getFilterStyles = (filter, isActive) => {
    const baseStyles = "flex items-center px-4 py-2 rounded-xl font-medium transition-all duration-200 transform hover:scale-105 shadow-lg";
    
    if (isActive) {
      switch (filter.color) {
        case 'blue':
          return `${baseStyles} bg-blue-500 text-white shadow-blue-200`;
        case 'orange':
          return `${baseStyles} bg-orange-500 text-white shadow-orange-200`;
        case 'green':
          return `${baseStyles} bg-green-500 text-white shadow-green-200`;
        default:
          return `${baseStyles} bg-gray-500 text-white`;
      }
    } else {
      return `${baseStyles} bg-white text-gray-700 border border-gray-200 hover:border-gray-300 hover:shadow-xl`;
    }
  };

  return (
    <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
      {filters.map(filter => {
        const isActive = currentFilter === filter.key;
        return (
          <button
            key={filter.key}
            onClick={() => onFilterChange(filter.key)}
            className={getFilterStyles(filter, isActive)}
          >
            <span className="mr-2">{filter.icon}</span>
            <span className="mr-2">{filter.label}</span>
            <span className={`inline-flex items-center justify-center min-w-[24px] h-6 rounded-full text-xs font-bold ${
              isActive 
                ? 'bg-white bg-opacity-20 text-white' 
                : 'bg-gray-100 text-gray-600'
            }`}>
              {filter.count}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default TaskFilter;
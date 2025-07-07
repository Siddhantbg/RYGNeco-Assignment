import React from 'react';

const TaskItem = ({ task, onToggleComplete, onEditTask, onDeleteTask }) => {
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      onDeleteTask(task.id);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
  };

  return (
    <div className={`bg-white rounded-2xl shadow-lg border-l-4 transition-all duration-300 hover:shadow-xl hover:transform hover:scale-[1.02] ${
      task.completed 
        ? 'border-green-500 bg-gradient-to-r from-green-50 to-white' 
        : 'border-orange-500 bg-gradient-to-r from-orange-50 to-white'
    }`}>
      <div className="p-6">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
          {/* Task Content */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
              <h3 className={`text-lg font-semibold transition-all duration-200 ${
                task.completed 
                  ? 'text-gray-500 line-through' 
                  : 'text-gray-800'
              }`}>
                {task.title}
              </h3>
              <span className="text-sm text-gray-500 font-medium bg-gray-100 px-3 py-1 rounded-full whitespace-nowrap">
                {formatDate(task.createdAt)}
              </span>
            </div>
            
            {task.description && (
              <p className={`text-gray-600 mb-3 leading-relaxed ${
                task.completed ? 'text-gray-400' : ''
              }`}>
                {task.description}
              </p>
            )}
            
            <div className="flex items-center">
              <span className="text-sm font-medium text-gray-600 mr-2">Status:</span>
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                task.completed 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-orange-100 text-orange-800'
              }`}>
                <div className={`w-2 h-2 rounded-full mr-2 ${
                  task.completed ? 'bg-green-500' : 'bg-orange-500'
                }`}></div>
                {task.completed ? 'Completed' : 'Pending'}
              </span>
            </div>
          </div>

          {/* Task Actions */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-2 min-w-[140px]">
            <button
              onClick={() => onToggleComplete(task.id)}
              className={`flex items-center justify-center px-4 py-2 rounded-xl font-medium transition-all duration-200 transform hover:scale-105 ${
                task.completed
                  ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg hover:shadow-xl'
                  : 'bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl'
              }`}
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {task.completed ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                )}
              </svg>
              {task.completed ? 'Mark Pending' : 'Complete'}
            </button>
            
            <button
              onClick={() => onEditTask(task)}
              className="flex items-center justify-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              Edit
            </button>
            
            <button
              onClick={handleDelete}
              className="flex items-center justify-center px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-xl font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
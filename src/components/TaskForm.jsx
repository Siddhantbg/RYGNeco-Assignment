import React, { useState } from 'react';

const TaskForm = ({ onAddTask, editingTask, onUpdateTask, onCancelEdit }) => {
  const [title, setTitle] = useState(editingTask ? editingTask.title : '');
  const [description, setDescription] = useState(editingTask ? editingTask.description : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      if (editingTask) {
        onUpdateTask({
          ...editingTask,
          title: title.trim(),
          description: description.trim()
        });
      } else {
        onAddTask({
          id: Date.now(),
          title: title.trim(),
          description: description.trim(),
          completed: false,
          createdAt: new Date().toISOString()
        });
      }
      setTitle('');
      setDescription('');
    }
  };

  const handleCancel = () => {
    setTitle('');
    setDescription('');
    if (onCancelEdit) onCancelEdit();
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
      <div className="flex items-center mb-6">
        <div className="flex items-center justify-center w-10 h-10 mr-3 rounded-lg overflow-hidden shadow-md">
          <img 
            src="/logo.webp" 
            alt="Task Tracker Logo" 
            className="w-full h-full object-contain"
          />
        </div>
        <h2 className="text-xl font-semibold text-gray-800">
          {editingTask ? 'Edit Task' : 'Add New Task'}
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
            Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter task title"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter task description (optional)"
            rows="3"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            type="submit"
            className="flex-1 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-green-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            {editingTask ? 'Update Task' : 'Add Task'}
          </button>
          {editingTask && (
            <button
              type="button"
              onClick={handleCancel}
              className="flex-1 bg-gray-500 text-white font-semibold py-3 px-6 rounded-xl hover:bg-gray-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
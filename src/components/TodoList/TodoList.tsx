import React from 'react';
import { TodoListItem } from './TodoListItem/TodoListItem';
import { Todo, ToggleComplete } from '../../types/types';

interface TodoListProps {
  todos: Array<Todo>;
  toggleComplete: ToggleComplete;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, toggleComplete }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoListItem key={todo.text} todo={todo} toggleComplete={toggleComplete} />
      ))}
    </ul>
  );
};

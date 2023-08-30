import React from 'react'
import { Todo } from '@/utils/interface';
import { deleteTodo, getAllTodos } from '@/utils/supabaseFunctiona';

type Props = {
  todos: Todo[];
  setTodos: React.Dispatch<any>;
};

const TodoList = (props: Props) => {
  const { todos, setTodos } = props

  const handleDelete = async (id: number) => {
    await deleteTodo(id)
    let todos = await getAllTodos()

    setTodos(todos)

  }

  return (
    <div>
      <ul className='mx-auto'>
        {todos.map((todo) => (
        <div key={todo.id} className='flex rounded-md mt-2 mb-2 p-2 justify-between bg-gray-300'>
          <li className=' font-medium'>✅ {todo.text}</li>
          <span className=' cursor-pointer' onClick={() => handleDelete(todo.id)}>✖️</span>
        </div>

        ))}
      </ul>
    </div>
  )
}

export default TodoList
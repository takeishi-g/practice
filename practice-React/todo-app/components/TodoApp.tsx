import React, { useEffect, useState } from 'react'
import TodoList from './TodoList'
import { addTodo, getAllTodos } from '@/utils/supabaseFunctiona'

const TodoApp = () => {
  const [todos, setTodos] = useState<any>([])
  const [text, setText] = useState<string>("")

  useEffect(() => {
    const getTodos = async() => {
      const todos = await getAllTodos()
      setTodos(todos)
      console.log(todos)
    }
    getTodos();
  },[])

  const handleSubmit =async (e:any) => {
    e.preventDefault();

    await addTodo(text)
    let todos = await getAllTodos()
    setTodos(todos)

    setText("")
  }

  return (
    <section className='text-center mb-2 text-2xl font-medium'>
      <h3>Supabase Todo App</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text"  className="shadow-lg p-1 outline-none mr-2" onChange={(e) => setText(e.target.value)} value={text}/>
        <button className="shadow-md border-2 px-1 py-1 rounded-lg bg-blue-200">Add</button>
      </form>
      <TodoList todos={todos} setTodos={setTodos}/>
    </section>
  )
}

export default TodoApp
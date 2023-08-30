import { supabase } from "./supabase"

export const getAllTodos =async () => {
  const todos = await supabase.from("todo").select("*");
  console.log(todos);
  return todos.data;
}

export const addTodo = async(text: string) => {
  await supabase.from("todo").insert({text: text})
}

export const deleteTodo = async(id: number) => {
  await supabase.from("todo").delete().eq("id", id)
}

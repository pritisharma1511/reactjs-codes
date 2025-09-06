const TodoKey = "reactTodo";
export const getLocalStorageTodoData = () => {
   const rawTodos = localStorage.getItem(TodoKey);
      if(!rawTodos) return [];
      return JSON.parse(rawTodos);
};
export const setLocalStorageTodoData = (tasks) => {
  return localStorage.setItem(TodoKey, JSON.stringify(tasks));

};
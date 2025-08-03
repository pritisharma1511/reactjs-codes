const TodoKey = "reactTodo";
export const getLocalStorage = () => {
   const rawTodos = localStorage.getItem(TodoKey);
      if(!rawTodos) return [];
      return JSON.parse(rawTodos);
};
export const setLocalStorage = (tasks) => {
  return localStorage.setItem(TodoKey, JSON.stringify(tasks));

};
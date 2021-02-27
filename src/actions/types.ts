import { FetchTodosAction, DeleteTodoAction } from "./todos";

// redux doc recommends type alias with strings for TS
// Grider disagrees and says enums are better
export enum ActionTypes {
  fetchTodos, // fetchTodos:  0 same thing
  // no need to do fetchTodos: 'FETCH_TODOS'
  // all redux cares about is that there's a unique identifier to it
  deleteTodo,
}

export type Action = FetchTodosAction | DeleteTodoAction;

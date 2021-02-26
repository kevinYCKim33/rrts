import { combineReducers } from "redux";
import { todosReducer } from "./todos";
import { Todo } from "../actions";

// just good documentation to know what the redux store looks like
export interface StoreState {
  todos: Todo[];
}

export const reducers = combineReducers<StoreState>({
  todos: todosReducer,
});

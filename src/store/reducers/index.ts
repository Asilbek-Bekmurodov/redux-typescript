import { combineReducers } from "redux";
import { todoReducer } from "./todoReducer";
import { userReducer } from "./userReducer";
import { postsReducer } from "./postReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  todo: todoReducer,
  post: postsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

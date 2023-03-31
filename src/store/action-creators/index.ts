import * as UserActionCreators from "./user";
import * as TodoActionCreators from "./todo";
import * as PostActionCreators from "./post";

export const ActionCreators = {
  ...UserActionCreators,
  ...TodoActionCreators,
  ...PostActionCreators,
};

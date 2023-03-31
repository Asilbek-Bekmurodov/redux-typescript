export interface PostState {
  posts: any[];
  loading: boolean;
  error: null | string;
  page: number;
  limit: number;
}

export enum TypedPostActions {
  FETCH_POSTS = "FETCH_POSTS",
  FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS",
  FETCH_POSTS_ERROR = "FETCH_POSTS_ERROR",
  SET_POST_PAGE = "SET_POST_PAGE",
}

interface fetchPostAction {
  type: TypedPostActions.FETCH_POSTS;
}
interface fetchPostActionSuccess {
  type: TypedPostActions.FETCH_POSTS_SUCCESS;
  payload: any[];
}
interface fetchPostActionError {
  type: TypedPostActions.FETCH_POSTS_ERROR;
  payload: string;
}
interface setPostPageAction {
  type: TypedPostActions.SET_POST_PAGE;
  payload: number;
}

export type ActionType =
  | fetchPostAction
  | fetchPostActionSuccess
  | fetchPostActionError
  | setPostPageAction;

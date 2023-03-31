import { ActionType, PostState, TypedPostActions } from "../../types/post";

const initialState: PostState = {
  posts: [],
  loading: true,
  error: null,
  page: 1,
  limit: 10,
};

export const postsReducer = (
  state = initialState,
  action: ActionType
): PostState => {
  switch (action.type) {
    case TypedPostActions.FETCH_POSTS:
      return { ...state, loading: true };
    case TypedPostActions.FETCH_POSTS_SUCCESS:
      return { ...state, posts: action.payload, loading: false };
    case TypedPostActions.FETCH_POSTS_ERROR:
      return { ...state, error: action.payload, loading: false };
    case TypedPostActions.SET_POST_PAGE:
      return { ...state, page: action.payload };
    default:
      return state;
  }
};

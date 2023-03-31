import { Dispatch } from "react";
import { ActionType, TypedPostActions } from "../../types/post";
import axios from "axios";

export const fetchPosts = (page = 1, limit = 10) => {
  return async (dispatch: Dispatch<ActionType>) => {
    try {
      dispatch({ type: TypedPostActions.FETCH_POSTS });
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
        {
          params: { _limit: limit, _page: page },
        }
      );
      setTimeout(() => {
        dispatch({
          type: TypedPostActions.FETCH_POSTS_SUCCESS,
          payload: response.data,
        });
      }, 500);
    } catch (err: any) {
      dispatch({
        type: TypedPostActions.FETCH_POSTS_ERROR,
        payload: err.message,
      });
    }
  };
};

export const setPagePost = (page: number) => {
  return { type: TypedPostActions.SET_POST_PAGE, payload: page };
};

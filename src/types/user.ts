export interface UserState {
  users: any[];
  loading: boolean;
  error: null | string;
}

export enum UserActionTypes {
  FETCH_USERS = "FETCH_USERS",
  FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
  FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
}

interface FetchUserAction {
  type: UserActionTypes.FETCH_USERS;
}
interface FetchUserActionSuccess {
  type: UserActionTypes.FETCH_USERS_SUCCESS;
  payload: any[];
}
interface FetchUserActionError {
  type: UserActionTypes.FETCH_USERS_ERROR;
  payload: string;
}

export type UserAction =
  | FetchUserAction
  | FetchUserActionError
  | FetchUserActionSuccess;

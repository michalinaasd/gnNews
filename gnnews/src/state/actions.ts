import { ViewType } from "../components/types";

export const SET_VIEW_TYPE = "SET_VIEW_TYPE";

interface SetViewTypeAction {
  type: typeof SET_VIEW_TYPE;
  payload: ViewType;
}

export type ActionTypes = SetViewTypeAction;

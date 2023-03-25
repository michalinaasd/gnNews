import { ViewType } from "../components/types";

export const SET_VIEW_TYPE = "SET_VIEW_TYPE";

interface SetViewTypeAction {
  type: typeof SET_VIEW_TYPE;
  payload: ViewType;
}

export const SET_QUERY_RESULTS_COUNT = "SET_QUERY_RESULTS_COUNT";

interface SetQueryResultsCountAction {
  type: typeof SET_QUERY_RESULTS_COUNT;
  payload: number;
}

export type ActionTypes = SetQueryResultsCountAction | SetViewTypeAction;

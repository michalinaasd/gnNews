import { ViewType } from "../components/types";
import { SET_VIEW_TYPE, ActionTypes, SET_QUERY_RESULTS_COUNT } from "./actions";

interface State {
  viewType: ViewType;
  queryResultsCount: number;
}

const initialState: State = {
  viewType: "grid",
  queryResultsCount: 0,
};

export const reducer = (state = initialState, action: ActionTypes): State => {
  switch (action.type) {
    case SET_VIEW_TYPE:
      return {
        ...state,
        viewType: action.payload,
      };
    case SET_QUERY_RESULTS_COUNT:
      return {
        ...state,
        queryResultsCount: action.payload,
      };
    default:
      return state;
  }
};

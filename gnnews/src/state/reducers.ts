import { ViewType } from "../components/types";
import { SET_VIEW_TYPE, ActionTypes } from "./actions";

interface State {
  viewType: ViewType;
}

const initialState: State = {
  viewType: "grid",
};

export const reducer = (state = initialState, action: ActionTypes): State => {
  switch (action.type) {
    case SET_VIEW_TYPE:
      return {
        ...state,
        viewType: action.payload,
      };
    default:
      return state;
  }
};

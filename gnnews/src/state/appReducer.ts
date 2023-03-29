import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ViewType } from "../components/types";

interface AppState {
  viewType: ViewType;
  queryResultsCount: number;
}

const initialState: AppState = {
  viewType: "grid",
  queryResultsCount: 0,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setViewType: (state, action: PayloadAction<ViewType>) => {
      state.viewType = action.payload;
    },
    setQueryResultsCount: (state, action: PayloadAction<number>) => {
      state.queryResultsCount = action.payload;
    },
  },
});

export const { setViewType, setQueryResultsCount } = appSlice.actions;

export default appSlice.reducer;

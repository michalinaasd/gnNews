import { ViewType } from "./types";

export interface State {
  app: {
    viewType: ViewType;
    queryResultsCount: number;
  };
}

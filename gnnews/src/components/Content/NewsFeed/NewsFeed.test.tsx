import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NewsFeed from "./NewsFeed";
import { Provider } from "react-redux";
import { store } from "../../../state/store";

const mockNewsData = [
  {
    title: "News 1",
    description: "Description 1",
    url: "http://news1.com",
  },
  {
    title: "News 2",
    description: "Description 2",
    url: "http://news2.com",
  },
];

jest.mock("../../../services/newsApiService", () => ({
  getNewsData: jest.fn(),
}));

describe("NewsFeed component", () => {
  it("renders without errors", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <NewsFeed />
        </Provider>
      </BrowserRouter>
    );
  });
});

import ViewLayoutSwitcher from "./ViewLayoutSwitcher";
import { Provider } from "react-redux";
import { fireEvent, render, screen } from "@testing-library/react";
import { store } from "../../../../state/store";

test("renders correctly", () => {
  render(
    <Provider store={store}>
      <ViewLayoutSwitcher />
    </Provider>
  );
  const tooltip = screen.getByLabelText("Switch to list view");
  expect(tooltip).toBeInTheDocument();
});

test("check if click on button works", () => {
  render(
    <Provider store={store}>
      <ViewLayoutSwitcher />
    </Provider>
  );
  fireEvent.click(screen.getByRole("button"));
  const tooltip = screen.getByLabelText("Switch to grid view");
  expect(tooltip).toBeInTheDocument();
});

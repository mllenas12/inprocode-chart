import { Provider } from "react-redux";
import { render, screen } from "../../utils/test-utils";
import { store } from "../../app/store";
import { expect, test } from "vitest";
import Main from "./Main";

describe("Main Component", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Main />
      </Provider>
    );
  });

  test("should render the title", () => {
    const totalBalanceTitle = screen.getByText("main.title");
    expect(totalBalanceTitle).toBeInTheDocument();
  });

  test("should render the chart", () => {
    const chart = screen.getByTestId("bar-chart");
    expect(chart).toBeInTheDocument();
  });
  test("should display the expenses of the current day, and shoud always be positive and not undefined", () => {
    const currentExpensesElement = screen.getByText(/[\d]+ €/);
    const currentExpensesText = currentExpensesElement.textContent;
    const value = Number(currentExpensesText.replace(" €", ""));
    expect(value).toBeDefined();
    expect(value).toBeGreaterThanOrEqual(0);
  });

  test("should display the difference of the amount of money between the current day and the day before", () => {
    const difference = screen.getByText(/[\d]+%/);
    expect(difference).toBeInTheDocument();
  });
});

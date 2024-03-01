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
    const totalBalanceTitle = screen.getByText("Despeses - Última setmana");
    expect(totalBalanceTitle).toBeInTheDocument();
  });

  test("should render the chart", () => {
    const chart = screen.getByTestId("bar-chart");
    expect(chart).toBeInTheDocument();
  });
});

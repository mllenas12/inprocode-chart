import { Provider } from "react-redux";
import { render, screen } from "../../utils/test-utils";
import TotalBalance from "./TotalBalance";
import { store } from "../../app/store";
import { expect } from "vitest";

describe("TotalBalance", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <TotalBalance />
      </Provider>
    );
  });

  test("should render the title", () => {
    const totalBalanceTitle = screen.getByText("Balanç total");
    expect(totalBalanceTitle).toBeInTheDocument();
  });

  test("should display the total balance amount", () => {
    const total = screen.getByText(/[\d]+ €/);
    expect(total).toBeInTheDocument();
  });

  test("should calculate correctyle the total balance", () => {
    const expectedTotal = 3323;
    const totalAmount = screen.getByText(`${expectedTotal} €`);
    expect(totalAmount).toBeInTheDocument();
  });
});

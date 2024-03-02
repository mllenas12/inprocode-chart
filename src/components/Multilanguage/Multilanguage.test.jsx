import { Provider } from "react-redux";
import { render } from "../../utils/test-utils";
import { store } from "../../app/store";
import { expect } from "vitest";
import MultiLanguage from "./Multilanguage";

describe("Multilanguages", () => {
  test("should renders buttons for each language", () => {
    const languages = [
      { lang: "en", flagImg: "/src/assets/en-flag.png" },
      { lang: "es", flagImg: "/src/assets/es-flag.png" },
      { lang: "cat", flagImg: "/src/assets/cat-flag.png" },
    ];

    const { getByAltText } = render(
      <Provider store={store}>
        <MultiLanguage />
      </Provider>
    );

    languages.forEach(({ lang }) => {
      const button = getByAltText(`Flag to choose language: ${lang}`);
      expect(button).toBeInTheDocument();
    });
  });
});

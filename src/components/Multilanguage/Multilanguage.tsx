import languages from "../../data/languages.json";
import { useTranslation } from "react-i18next";
import { ILang } from "../../types/types";
import { useAppDispatch } from "../../hooks/storeHooks";
import { changeLang } from "../../features/chartData/chartDataSlice";

const Multilanguage = () => {
  const dispatch = useAppDispatch();
  const { t, i18n } = useTranslation("translations");

  const handleChangeLanguage = (language: ILang) => {
    i18n.changeLanguage(language.lang);
    const translatedXcoord = t("languages.xAxis");
    dispatch(changeLang(translatedXcoord));
  };

  const flags = languages.map((language: ILang) => {
    return (
      <button
        key={language.lang}
        onClick={() => handleChangeLanguage(language)}
      >
        <img
          className="rounded-full w-6 h-6 "
          src={language.flagImg}
          alt={`Flag to choose language: ${language.lang}`}
        ></img>
      </button>
    );
  });
  return <div className="flex gap-2 justify-end mt-8">{flags}</div>;
};

export default Multilanguage;

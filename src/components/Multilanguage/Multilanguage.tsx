import languages from "../../data/languages.json";

const Multilanguage = () => {
  const flags = languages.map((lang: any) => {
    return (
      <button key={lang.lang}>
        <img
          className="rounded-full w-6 h-6"
          src={lang.flagImg}
          alt={`Flag to choose language: ${lang.lang}`}
        ></img>
      </button>
    );
  });
  return <div className="flex gap-2 justify-end mt-8">{flags}</div>;
};

export default Multilanguage;

import Multilanguage from "../Multilanguage/Multilanguage";
import TotalBalance from "../TotalBalance/TotalBalance";
import Main from "../Main/Main";

const Layout = () => {
  return (
    <div className="w-80 h-[500px] my-auto flex flex-col gap-4">
      <Multilanguage />
      <TotalBalance />
      <Main />
    </div>
  );
};

export default Layout;

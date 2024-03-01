const Main = () => {
  return (
    <div className="bg-white rounded-lg p-4 flex flex-col gap-2">
      <h1 className="text-lg font-bold px-2">Despeses - Última setmana</h1>
      <div className="h-32">Gràfic</div>
      <hr className="border rounded" />
      <div className="flex justify-between my-4">
        <div>
          <h5 className="text-xs font-semibold text-neutral-300">
            Despeses avui
          </h5>
          <h2 className="text-2xl font-bold">557.46 €</h2>
        </div>
        <div className="flex flex-col items-end my-2">
          <p className="text-xs font-bold">+2.4%</p>
          <p className="text-xs font-semibold">respecte a ahir</p>
        </div>
      </div>
    </div>
  );
};

export default Main;

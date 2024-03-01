const TotalBalance = () => {
  return (
    <div className="bg-[#ec755c] flex justify-between text-white p-4 rounded-lg">
      <div className="">
        <p className="text-xs">Balanç total</p>
        <p className="font-semibold">3323 €</p>
      </div>
      <div className="flex gap-2 my-auto">
        <img
          src="/images/left-arrow.svg"
          alt="left-arrow"
          className="w-4 h-4"
        />
        <img
          src="/images/right-arrow.svg"
          alt="right-arrow"
          className="w-4 h-4"
        />
      </div>
    </div>
  );
};

export default TotalBalance;

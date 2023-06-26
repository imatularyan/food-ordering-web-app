const Shimmer = () => {
  return (
    <div className="w-10/12 lg:w-10/12 mx-auto">
      <div data-testid="shimmer" className="flex flex-wrap mt-14 w-full">
        {Array(10)
          .fill("")
          .map((e, index) => (
            <div
              key={index}
              className="p-4 h-60 my-5 mx-2 shadow-sm w-full sm:w-full md:w-[311px] lg:w-[276px] xl:w-[283px] 2xl:w-[247px]"
            >
              <div className="animate-pulse">
                <div className="bg-gray-400 w-full h-32"></div>
                <div className="space-y-2 py-1 mt-2">
                  <div className="h-4 w-28 bg-gray-400"></div>
                  <div className="h-4 w-40 bg-gray-400"></div>
                </div>
                <div className="mt-3 h-4 bg-gray-400"></div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Shimmer;

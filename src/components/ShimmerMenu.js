const ShimmerMenu = () => {
  return (
    <div className=" mt-2 min-h-screen">
      <div className=" sticky top-0 w-full bg-zinc-800 z-10">
        <div className="flex w-4/5 m-auto h-36 text-cyan-50">
          <div className=" w-52 h-32 m-auto bg-gray-400 animate-pulse"></div>
          <div className=" flex m-auto flex-col gap-1 animate-pulse">
            <div>
              <div className="bg-gray-400 h-4 w-20"></div>
            </div>
            <div>
              <div className="bg-gray-400 h-4 w-28"></div>
            </div>
            <div>
              <div className="bg-gray-400 h-4 w-24"></div>
            </div>
            <div>
              <div className="bg-gray-400 h-4 w-20"></div>
            </div>
            <div>
              <div className="bg-gray-400 h-4 w-22"></div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-3/6 border-r border-l mx-auto p-2">
        {Array(10)
          .fill("")
          .map((e, index) => (
            <div
              key={index}
              className="w-full flex mx-auto my-2 items-center justify-between border p-2 animate-pulse"
            >
              <div className=" w-1/4 bg-gray-400 h-28"></div>
              <div className=" ml-2">
                <div className="bg-gray-400 h-3 w-24 m-1"></div>
                <div className="bg-gray-400 h-3 w-20 m-1"></div>
                <div className="bg-gray-400 h-3 w-22 w-16 m-1"></div>
                <div className="bg-gray-400 h-3 w-20 m-1"></div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ShimmerMenu;

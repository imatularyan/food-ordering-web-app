const Shimmer = () => {
  return (
    <div className="flex flex-wrap min-h-screen">
      <div data-testid="shimmer" className="flex min-w-min w-3/5 justify-items-stretch m-auto flex-wrap mt-3">
        {Array(10)
          .fill("")
          .map((e, index) => (
            <div
              key={index}
              className=" w-52 h-64 px-3 pt-5 pb-8 mb-3 mt-20 mx-1 bg-zinc-300"
            ></div>
          ))}
      </div>
    </div>
  );
};

export default Shimmer;

const Shimmer = () => {
  return (
    <div className="flex flex-wrap">
      <div className="flex justify-item-stretch flex-wrap w-3/5 m-auto">
        {Array(10)
          .fill("")
          .map((e, index) => (
            <div
              key={index}
              className="w-56 h-72 px-3 pt-5 pb-8 mb-3 mt-20 mx-1 ml-4 bg-zinc-300"
            ></div>
          ))}
      </div>
    </div>
  );
};

export default Shimmer;

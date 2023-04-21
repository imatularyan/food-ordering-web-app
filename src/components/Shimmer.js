const Shimmer = () => {
  return (
    <div className="w-10/12 lg:w-10/12 mx-auto">
      <div
        data-testid="shimmer"
        className="flex justify-center flex-wrap mx-auto mt-14"
      >
        {Array(13)
          .fill("")
          .map((index) => (
            <div
              key={index}
              className=" h-60 my-5 mx-5 bg-gray-200 w-full sm:w-full md:w-[311px] lg:w-[276px] xl:w-72 2xl:w-[247px]"
            ></div>
          ))}
      </div>
    </div>
  );
};

export default Shimmer;

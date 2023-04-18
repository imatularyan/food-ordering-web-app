const Shimmer = () => {
  return (
    <div className="flex flex-wrap w-full">
      <div
        data-testid="shimmer"
        className="flex w-10/12 lg:w-10/12 mx-auto flex-wrap mt-16"
      >
        {Array(10)
          .fill("")
          .map((e, index) => (
            <div
              key={index}
              className=" w-64 h-64 pt-5 my-5 mx-5 bg-gray-300"
            ></div>
          ))}
      </div>
    </div>
  );
};

export default Shimmer;

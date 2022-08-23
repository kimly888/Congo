const Hero = () => {
  return (
    <div className=" bg-blue-100 pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
      <div className="relative flex flex-row justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
        <div className="sm:max-w-lg">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:tracking-tight sm:text-6xl">
            Mech keyboards
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            It is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout.
          </p>
          <div className="mt-6">
            <a
              href="../pages/ProductsList.jsx"
              className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            >
              Start shopping
            </a>
          </div>
        </div>
        <div className=" h-80 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
          <img
            src="https://i.imgur.com/5HLjxG9.png"
            alt=""
            className="w-full h-full object-center object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

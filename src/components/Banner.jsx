import world from "../assets/wdone2.png";

const Banner = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 place-items-center md:gap-4 p-2 container mx-auto px-2 md:px-10 md:py-10">
      {/* info */}
      <div className=" space-y-6">
        <h1 className="text-5xl font-bold">
          Explore the World, One Country at a Time.
        </h1>
        <p className="">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit,
          dolorem!
        </p>
        <button className="border bg-gray-800 px-3 py-2 font-semibold rounded-md hover:-translate-y-1 hover:bg-gray-900 ho duration-300 shadow-md">
          Start Exploring
        </button>
      </div>

      {/* image */}
      <div className="flex items-center justify-center  h-full">
        <img className=" w-full object-cover bg mb-8" src={world} alt="" />
      </div>
    </section>
  );
};

export default Banner;

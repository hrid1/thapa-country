import { FaArrowRightArrowLeft, FaArrowRightLong } from "react-icons/fa6";
import world from "../assets/wdone2.png";
import { FaLongArrowAltRight } from "react-icons/fa";

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
        <button className="border border-gray-500 bg-gray-900 px-3 py-2 font-semibold rounded-md hover:border-gray-200 hover:-translate-y-1  duration-300 shadow-md flex items-center gap-2.5">
          Start Exploring
          
           <FaLongArrowAltRight></FaLongArrowAltRight>

        </button>
      </div>

      {/* image */}
      <div className="flex items-center justify-center h-full">
        <img className=" w-full object-cover md:mb-8 mt-4 md:mt-0" src={world} alt="" />
      </div>
    </section>
  );
};

export default Banner;

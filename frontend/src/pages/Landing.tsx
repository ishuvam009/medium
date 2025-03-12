import { Link } from "react-router-dom";
import image1 from "../assets/landing_pic.webp";

export const Landing = () => {
  return (
    <>
      <div className="bg-[#F7F4ED] min-h-screen w-full">
        {/* Navbar container */}
        <div className="flex flex-row justify-between items-center py-4 sm:py-6 px-4 sm:px-8 lg:px-1 xl:px-24 border-b fixed w-full bg-[#F7F4ED]">
          {/* Logo section */}
          <div>
            <p className="text-2xl sm:text-3xl xl:text-4xl font-bold font-serif">Medium</p>
          </div>

          {/* Navigation links */}
          <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
            <Link to={"/"} className="!text-black lg:block hidden">
              Our Story
            </Link>
            <Link to={"/"} className="!text-black sm:block hidden">
              Membership
            </Link>
            <Link to={"/"} className="!text-black lg:block hidden">
              Write
            </Link>
            <Link to={"/"} className="!text-black sm:block hidden">
              Sign in
            </Link>
            <Link to={"/signup"}>
              <button className="bg-black text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-full hover:bg-gray-800 transition-colors text-sm sm:text-base">
                Get Started
              </button>
            </Link>
          </div>
        </div>

        <div className="flex min-h-screen items-center px-4 sm:px-8 lg:px-16 xl:px-24 pt-16 sm:pt-20 border-b">
          <div className="w-full lg:w-[62%]">
            <p className="text-5xl sm:text-6xl lg:text-8xl xl:text-9xl font-serif mb-4 sm:mb-6 lg:mb-8 lg:pt-15 xl:pt-25">
              Human <br className="sm:hidden" /> stories & ideas
            </p>
            <p className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 lg:mb-10 max-w-2xl">
              A place to read, write, and deepen your understanding
            </p>
            <Link to={"signup"}>
              <button className="bg-black text-white px-6 py-2.5 sm:px-8 sm:py-3 lg:px-10 lg:py-4 lg:mb-10 rounded-full hover:bg-slate-400 transition-colors text-base sm:text-lg lg:text-xl">
                Start reading
              </button>
            </Link>
          </div>
          <div className="w-[38%] sm:block hidden">
            <img
              src={image1}
              alt="Landing illustration"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        <div className="py-8 flex justify-center">
          <p className="text-sm sm:text-base">© Medium.com</p>
        </div>
      </div>
    </>
  );
};

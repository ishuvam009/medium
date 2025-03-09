import { Link } from "react-router-dom";
import image1 from "../assets/landing_pic.webp";

export const Landing = () => {
  return (
    <>
      <div className="bg-[#F7F4ED] min-h-screen w-full">
        {/* Navbar container */}
        <div className="flex flex-row justify-between items-center py-6 px-4 sm:px-10 border-b fixed w-full bg-[#F7F4ED]">
          {/* Logo section */}
          <div>
            <p className="text-3xl sm:text-3xl font-bold font-serif">Medium</p>
          </div>

          {/* Navigation links */}
          <div className="flex items-center gap-4">
            <Link to={"/"} className="!text-black md:block hidden">
              Our Story
            </Link>
            <Link to={"/"} className="!text-black sm:block hidden">
              Membership
            </Link>
            <Link to={"/"} className="!text-black lg:block hidden">
              Write
            </Link>
            <Link to={"/"} className="!text-black md:block hidden">
              Sign in
            </Link>
            <Link to={"/signup"}>
              <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors">
                Get Started
              </button>
            </Link>
          </div>
        </div>
        <div className="flex min-h-screen items-center pl-4 sm:pl-10 pt-8 border-b">
          <div className="w-full lg:w-[62%] pl-6">
            <p className="text-5xl sm:text-7xl lg:text-9xl font-serif mb-6">
              Human <br /> stories & ideas
            </p>
            <p className="text-xl sm:text-2xl mb-8">
              A place to read, write, and deepen your understanding
            </p>
            <Link to={"signup"}>
              <button className="bg-black text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-slate-400 transition-colors text-lg sm:text-xl sm:block hidden">
                Start reading
              </button>
            </Link>
          </div>
          <div className="w-[38%] hidden lg:block">
            <img
              src={image1}
              alt="Landing illustration"
              className="w-full h-fit"
            />
          </div>
        </div>
        <div className="pt-8 flex justify-center">
          <p>© Medium.com</p>
        </div>
      </div>
    </>
  );
};

import { Link } from "react-router-dom";
import image1 from "../assets/landing_pic.webp";

export const Landing = () => {
  return (
    <>
      <div className="bg-[#F7F4ED] min-h-screen w-full">
        {/* Navbar container */}
        <div className="flex flex-col sm:flex-row justify-between items-center py-6 px-10 border-b fixed w-full bg-[#F7F4ED]">
          {/* Logo section */}
          <div className="mb-4 sm:mb-0">
            <p className="text-3xl sm:text-4xl font-bold font-serif">Medium</p>
          </div>

          {/* Navigation links */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 items-center text-lg sm:text-xl">
            <Link to={"/"} className="!text-black hidden sm:block">
              Our Story
            </Link>
            <Link to={"/"} className="!text-black hidden sm:block">
              Membership
            </Link>
            <Link to={"/"} className="!text-black hidden sm:block">
              Write
            </Link>
            <Link to={"/"} className="!text-black">
              Sign in
            </Link>
            <Link to={"/signup"}>
              <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors">
                Get Started
              </button>
            </Link>
          </div>
        </div>
        <div className="flex min-h-screen items-center pl-10 pt-10 border-b">
          <div className="w-[62%]">
            <p className="text-9xl font-serif mb-6">
              Human <br /> stories & ideas
            </p>
            <p className="text-2xl mb-8">
              A place to read, write, and deepen your understanding
            </p>
            <Link to={"signup"}>
              <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-slate-400 transition-colors text-xl">
                Start reading
              </button>
            </Link>
          </div>
          <div className="w-[38%]">
            <img
              src={image1}
              alt="Landing illustration"
              className="w-full h-fit object-cover sm:block"
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

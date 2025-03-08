import { Link } from "react-router-dom";

export const Landing = () => {
  return (
    <>
      <div className="bg-[#F7F4ED] min-h-screen w-full">
        {/* Navbar container */}
        <div className="flex flex-col sm:flex-row justify-between items-center p-4 border-b fixed w-full bg-[#F7F4ED]">
            {/* Logo section */}
            <div className="mb-4 sm:mb-0">
                <p className="text-3xl sm:text-4xl font-bold">Medium</p>
            </div>
            
            {/* Navigation links */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 items-center text-lg sm:text-xl">
                <Link to={"/"} className="!text-black hidden sm:block">Our Story</Link>
                <Link to={"/"} className="!text-black hidden sm:block">Membership</Link>
                <Link to={"/"} className="!text-black hidden sm:block">Write</Link>
                <Link to={"/"} className="!text-black">Sign in</Link>
                <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors">
                    Get Started
                </button>
            </div>
        </div>
      </div>
    </>
  );
};

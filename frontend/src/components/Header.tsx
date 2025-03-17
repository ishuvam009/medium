import { CiSearch } from "react-icons/ci";
import { LiaEditSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <div className="flex justify-between mb-6">
        <div className="flex p-4 items-center justify-between gap-x-4">
          <div className="">
            <Link to={"/"}>
              <p className="text-2xl font-semibold font-serif">Medium</p>
            </Link>
          </div>
          <div>
            <CiSearch />
          </div>
          <div>
            <input
              className="bg-[#F9F9F9] rounded-2xl p-2"
              type="text"
              placeholder="  Search"
            />
          </div>
        </div>
        <div className="flex justify-between items-center p-4 gap-x-10 mr-10">
          <div className="flex justify-between gap-x-1 items-center ">
            <Link to="/new-story" className="flex justify-between items-center">
              <LiaEditSolid />
              Write
            </Link>
          </div>
          <div>
            <Link to="/profile">
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-slate-400 text-white">
                S
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

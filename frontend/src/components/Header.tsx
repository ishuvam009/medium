import { CiSearch } from "react-icons/ci";
import { LiaEditSolid } from "react-icons/lia";

export const Header = () => {
  return (
    <>
      <div className="flex justify-between border border-[#F2F2F2] mb-6">
        <div className="flex p-4 items-center justify-between gap-x-4">
          <div className="">
            <p className="text-2xl font-semibold font-serif">Medium</p>
          </div>
          <div>
            <CiSearch />
          </div>
          <div>
            <input
              className="bg-[#F9F9F9] rounded-2xl"
              type="text"
              placeholder="  Search"
            />
          </div>
        </div>
        <div className="flex justify-between items-center p-4 gap-x-4">
          <div className="flex justify-between gap-x-1 items-center ">
            <LiaEditSolid />
            Write
          </div>
          <div>Profile</div>
        </div>
      </div>
    </>
  );
};

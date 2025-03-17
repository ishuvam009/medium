import { Header } from "../components/Header";

export const Profile = () => {
  return (
    <>
      <Header />
      <div className="flex border-t border-[#F2F2F2] ">
        <div className="w-full md:w-2/3 p-4 mx-20">
          <p className="font-bold text-4xl">Shuvam</p>
        </div>
        <div className="hidden md:block md:w-1/3 h-screen border-l border-[#F2F2F2] p-4">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-400 text-white">
            S
          </div>
          <div>
            <p className="font-bold text-2 mt-6">Name</p>
          </div>
        </div>
      </div>
    </>
  );
};

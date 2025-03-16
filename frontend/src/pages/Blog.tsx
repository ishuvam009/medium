import { Header } from "../components/Header";

export const Blog = () => {
  return (
    <>
      <Header />
      <div className="flex border-t border-[#F2F2F2] ">
        <div className="w-full lg:w-2/3 p-4 mx-20">
          <p>Hi</p>
        </div>
        <div className="hidden lg:block md:hidden lg:w-1/3 h-screen border-l border-[#F2F2F2] p-4">
          <p>Hi</p>
        </div>
      </div>
    </>
  );
};

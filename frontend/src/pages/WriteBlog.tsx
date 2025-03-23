import { Header } from "../components/Header";

export const WriteBlog = () => {
  return (
    <>
      <div>
        <Header />
        <div className="flex flex-col gap-y-4 items-center bg-amber-100 p-8">
          <p className="text-2xl font-bold">Write the Blog</p>
          <input className="p-6 border bg-white" type="text" placeholder="Write here." />
        </div>
      </div>
    </>
  );
};

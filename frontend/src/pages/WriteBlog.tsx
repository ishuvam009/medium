import { Header } from "../components/Header";

export const WriteBlog = () => {
  return (
    <>
      <div>
        <Header />
        <div className="flex flex-col gap-y-4 item-center bg-amber-100">
          <p className="text-2xl font-bold">Write the Blog</p>
          <input type="text" placeholder="Write here." />
        </div>
      </div>
    </>
  );
};

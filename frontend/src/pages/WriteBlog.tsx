import { Header } from "../components/Header";

export const WriteBlog = () => {
  return (
    <>
      <div>
        <Header />
        <div>
          <p>Write the Blog</p>
          <input type="text" placeholder="Write here." />
        </div>
      </div>
    </>
  );
};

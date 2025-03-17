import { Header } from "../components/Header";
import { BlogPostCards } from "../components/BlogPostCards";
import { RecommendedComponents } from "../components/RecommendedCompponent";

export const Blog = () => {
  return (
    <>
      <Header />
      <div className="flex border-t-2 border-[#F2F2F2]">
        <div className="w-full lg:w-2/3 p-4 mx-20">
          <BlogPostCards />
          <BlogPostCards />
          <BlogPostCards />
          <BlogPostCards />
          <BlogPostCards />
          <BlogPostCards />
          <BlogPostCards />
          <BlogPostCards />
        </div>
        <div className="hidden lg:block md:hidden lg:w-1/3 h-full border-l-2 border-[#F2F2F2] p-4 sticky top-0">
          <p className="font-semibold mb-6">Recommended Topics</p>
          <RecommendedComponents />
          <RecommendedComponents />
          <RecommendedComponents />
          <RecommendedComponents />
        </div>
      </div>
    </>
  );
};

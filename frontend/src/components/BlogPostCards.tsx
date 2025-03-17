import Img from "../assets/img.webp";
import { Link } from "react-router-dom";

export const BlogPostCards = () => {
  // const imageHandler = () =>{
  //   const image = null;
  //   const name = "Shuvam";
  //   if(!image){
  //     const image = arr[name].[0];
  //   }
  // }

  return (
    <>
      <Link to="/article">
        <div className="flex h-48 border border-gray-200 rounded-lg shadow-sm overflow-hidden mb-6">
          <div className="w-3/4 p-4 flex flex-col justify-between">
            <div>
              <div className="flex gap-x-4 items-center mb-2">
                <div className="flex items-center justify-center w-5 h-5 bg-slate-400 text-white rounded-full text-xs">
                  <img
                    className="rounded-full w-full h-full"
                    src={Img}
                    alt=""
                  />
                </div>
                <p className="text-sm text-gray-700">Shuvam</p>
              </div>
              <div>
                <p className="font-bold text-xl md:text-2xl line-clamp-2">
                  JavaScript Objects: Advance Interview Question
                </p>
              </div>
              <div>
                <p className="text-sm mt-1 text-gray-600 line-clamp-2">
                  A deep dive into the javascript interview questions.
                </p>
              </div>
            </div>
            <div>
              <p className="text-xs text-gray-500">18 March 2025</p>
            </div>
          </div>
          <div className="sm:w-1/4 h-48 sm:h-auto p-6">
            <img
              src={Img}
              alt="Blog post thumbnail"
              className="h-48 w-full object-cover"
            />
          </div>
        </div>
      </Link>
    </>
  );
};

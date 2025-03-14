import { Link } from "react-router-dom";

export const Signup = () => {
  return (
    <>
      <div className="h-full flex">
        <div className="w-1/2 h-screen bg-white text-center md:mt-10 xl:mt-20 2xl:mt-30">
          <p className="text-4xl font-bold">Create an account</p>
          <p className="text-slate-500 mt-2 lg:mt-4 xl:mt-8">
            Already have an account? <Link className="ml-2 hover:text-slate-700 underline" to={"/signin"}>Login</Link>
          </p>

          <div className="mt-10 flex flex-col gap-6 max-w-md mx-auto px-4">
            <div className="flex flex-col items-start">
              <label className="font-medium mb-2" htmlFor="username">Username</label>
              <input 
                id="username"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" 
                type="text" 
                placeholder="Enter your name"
              />
            </div>

            <div className="flex flex-col items-start">
              <label className="font-medium mb-2" htmlFor="email">Email</label>
              <input 
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" 
                type="email" 
                placeholder="Enter your email"
              />
            </div>

            <div className="flex flex-col items-start">
              <label className="font-medium mb-2" htmlFor="password">Password</label>
              <input 
                id="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" 
                type="password" 
                placeholder="Enter your password"
              />
            </div>
            <div>
              <Link to={"/"}>
              <button className="text-white bg-black w-full p-2 rounded-xl">Signup</button>
              </Link>
            </div>
          </div>
          
        </div>

        <div className="w-0 md:w-1/2 h-auto bg-slate-100 justify-center content-center px-28 hidden md:block">
          <p className="text-4xl font-medium">
            "The customer service I received was exceptional. The support went
            above and beyond to address my concerns."
          </p>
          <p className="text-xl font-medium mt-8">Jules Winnfield</p>
          <p className="text-slate-500">CEO, Acme Inc</p>
        </div>
      </div>
    </>
  );
};

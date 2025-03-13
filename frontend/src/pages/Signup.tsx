import { Link } from "react-router-dom";

export const Signup = () => {
  return (
    <>
      <div className="h-full flex">
        <div className="w-1/2 h-screen bg-white">
          <p>Create an account</p>
          <p>Already have an account? <Link to={"/signin"}></Link></p>
        </div>
        <div className="w-1/2 h-screen bg-slate-100 justify-center content-center px-28">
          <p className="text-4xl font-medium">"The customer service I received was exceptional. The support went above and beyond to address my concerns."</p>
          <p className="text-xl font-medium mt-8">Jules Winnfield</p>
          <p className="text-slate-500">CEO, Acme Inc</p>
        </div>
      </div>
    </>
  );
};

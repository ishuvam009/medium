import { useState } from "react";
import { Link } from "react-router-dom";
import { UserSinUp } from "@zedeye/zod-medium-common";
import axios from "axios";
import { Alert } from "../assets/Alert";

export const Signup = () => {

  const [formData, setFormData] = useState<UserSinUp>({
    email:"",
    password:"",
    name:""
  });

  const [showAlert, setAlertState] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    const {id, value} = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }))};

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      
      if(!formData.email || !formData.name || !formData.password){
        alert("Please fill all the fields.");
        return;
      }
      try {
        const response = await axios.post("",formData);
        console.log("The data is: ", response.data);
      } catch (error) {
        //edit here
        {showAlert && (
        <Alert message="Please fill all the texts."/>
      )}
        console.log("Error: ",error);
      }
    }
  

  return (
    <>
      <div className="h-full flex">
        <div className="w-full lg:w-1/2 h-screen bg-white text-center md:mt-10 xl:mt-20 2xl:mt-30">
          <p className="text-4xl font-bold">Create an account</p>
          <p className="text-slate-500 mt-2 lg:mt-4 xl:mt-8">
            Already have an account? <Link className="ml-2 hover:text-slate-700 underline" to={"/signin"}>Login</Link>
          </p>

          <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-6 max-w-md mx-auto px-4">
            <div className="flex flex-col items-start">
              <label className="font-medium mb-2" htmlFor="username">Username</label>
              <input 
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" 
                type="text" 
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>

            <div className="flex flex-col items-start">
              <label className="font-medium mb-2" htmlFor="email">Email</label>
              <input 
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" 
                type="email" 
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            <div className="flex flex-col items-start">
              <label className="font-medium mb-2" htmlFor="password">Password</label>
              <input 
                id="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" 
                type="password" 
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <button type="submit" className="text-white bg-black w-full p-2 rounded-xl">Signup</button>
            </div>
          </form>
          
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

"use client";
import { useFetchPost } from "@/hooks/useFetchPost";
import { useRouter } from "next/navigation";
import {useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [passwordconfirmation, setpasswordconfirmation] = useState<string | undefined>();
  const [Submit,setSubmit]=useState(false)
  const [Matched, setMatched] = useState(false);
  const [Error, setError] = useState("");
  const [input, setInput] = useState({ Name:'', Email: '', Password: '' });
  
  useEffect(() => {
    if (passwordconfirmation != undefined) {
      if (passwordconfirmation === input.Password) {
        setMatched(true);
      } else {
        setMatched(false);
      }
    }
  }, [passwordconfirmation,input]);
  
  const { data, error, loading, fetchData } = useFetchPost({ path: 'http://localhost:8000/users/', input });
 
  const handlePswdChange=(e:string)=>{
    let pswd=input
    pswd.Password=e
   setInput(pswd)
  }
  const handleEmailChange=(e:string)=>{
    let email=input
    email.Email=e
   setInput(email)
  }
  const handleNameChange=(e:string)=>{
    let inputname=input
    inputname.Name=e
   setInput(inputname)
  }

  useEffect(() => {
    if(loading===false && Submit===true){
      setSubmit(false)
      if (error==null){
        router.push("/")
       }else{
        setError(error)
       }
    }
  }, [loading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("")
    if (!Matched) {
      setError("Passwords do not match!");
      return;
    }
    setSubmit(true)
    await fetchData(); 
  };
  return (
    <div className="w-full h-screen flex items-center justify-center bg-patterned bg-cover ">
      <form
        onSubmit={(e) => handleSubmit(e)}
        style={{ boxShadow: "0px 5px 22px rgba(0, 0, 0, 0.04)" }}
        className="bg-white flex flex-col items-start p-8 w-80 gap-4 sm:w-96 sm:gap-5 sm:p-12 xl:gap-6 xl:p-14 xl:w-[400px] "
      >
        <h1 className="text-black font-semibold uppercase text-xl">
          Create Account
        </h1>
        <div className="flex flex-col gap-4 w-full">
          <input
            type="text"
            name="UserName"
            onChange={(e) => handleNameChange(e.target.value)}
            className="p-2 border border-solid border-borderGray rounded-md pl-3 w-full"
            placeholder="UserName"
            required
          />
          <input
            type="email"
            name="email"
            onChange={(e) => handleEmailChange(e.target.value)}
            className="p-2 border border-solid border-borderGray rounded-md pl-3 w-full"
            placeholder="Email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            required
          />
          <input
            type="password"
            name="password"
            onChange={(e) => handlePswdChange(e.target.value)}
            className="p-2 border border-solid border-borderGray rounded-md pl-3 w-full"
            placeholder="Password"
            required
            minLength={8}
          />
          <input
            type="password"
            name="passwordconfirmation"
            onChange={(e) => setpasswordconfirmation(e.target.value)}
            className={`${!Matched ? "text-red-600" : "text-black" } p-2 border border-solid border-borderGray rounded-md pl-3 w-full `}
            placeholder="Confirm Password"
            required
            minLength={8}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-scdOrang text-white rounded-md p-2 "
        >
          SIGN UP
        </button>

      { Error!=="" &&  <div className="text-red-500 font-semibold text-center w-full">
       {Error}
        </div>}
      </form>
    </div>
  );
}

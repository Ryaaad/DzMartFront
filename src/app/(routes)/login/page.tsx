"use client";
import { useFetchPost } from "@/hooks/useFetchPost";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [email, setemail] = useState<string | undefined>();
  const [password, setpassword] = useState<string | undefined>();
  const [Submit,setSubmit]=useState(false)
  const [input, setInput] = useState({ Email: '', Password: '' });

  const { data, error, loading, fetchData } = useFetchPost({ path: 'http://localhost:8000/users/login', input });
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
  useEffect(() => {
    if(loading===false && Submit===true){
      setSubmit(false)
      if (error==null){
        router.push("/")
       }
    }
  }, [loading]);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
        <h1 className="text-black font-semibold uppercase text-xl">Login</h1>
        <div className="flex flex-col gap-4 w-full">
          <input
            type="text"
            name="user"
            onChange={(e) => handleEmailChange(e.target.value)}
            className="p-2 border border-solid border-borderGray rounded-md pl-3 w-full"
            placeholder="Email"
            required
          />
          <input
            type="password"
            name="password"
            onChange={(e) => handlePswdChange(e.target.value)}
            className="p-2 border border-solid border-borderGray rounded-md pl-3 w-full"
            placeholder="Password"
            required
          />
        </div>
        <div className="flex gap-1 items-center">
          <input type="checkbox" id="checkbox" className="" />
          <label htmlFor="checkbox" className="cursor-pointer">
            Remember me
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-scdOrang text-white rounded-md p-2 "
        >
          {" "}
          LOG IN{" "}
        </button>
        <button className="w-full underline text-start ">
          {" "}
          Forget your password?{" "}
        </button>
        {error!=null && 
        <p className="text-red-500 font-semibold text-center w-full">
         Email or Password uncorrect
          </p>}
      </form>
    </div>
  );
}

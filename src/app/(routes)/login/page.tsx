"use client";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [user, setuser] = useState<string | undefined>();
  const [password, setpassword] = useState<string | undefined>();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(password);
    console.log(user);
    router.push("/");
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
            onChange={(e) => setuser(e.target.value)}
            className="p-2 border border-solid border-borderGray rounded-md pl-3 w-full"
            placeholder="Username / email"
            required
          />
          <input
            type="password"
            name="password"
            onChange={(e) => setpassword(e.target.value)}
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
      </form>
    </div>
  );
}

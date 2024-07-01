import Image from "next/image";
import jam from "../../../../public/images/product/jam.jpg"

interface props{
  name:string,
  desc:string
}

const BrandCart:React.FC<props>=({name,desc})=>{
  return (
   <div  style={{boxShadow: "0px 5px 22px rgba(0, 0, 0, 0.04)"}} className="h-max cursor-pointer rounded-2xl flex justify-center 
   gap-2 w-[calc(100vw/2-25px)] p-2 sm:p-4 sm:gap-3 sm:w-[calc(100vw/2-40px)] flex-col items-center md:items-start md:flex-row md:w-[calc(100vw/2-40px)] lg:w-[calc(100vw/3-35px)]
    xl:w-[calc(100vw/3-50px)] 2xl:h-32 2xl:w-[calc(100vw/4-40px)] ">
    <Image alt="jam" src={jam} className="rounded-md w-full h-auto md:w-1/3 2xl:w-auto 2xl:h-24 " ></Image>
    <div className="flex flex-col gap-1 p-1 ">
    <p className="tracking-wider text-[#212529bf] text-xs sm:text-sm xl:text-base "> {name}</p>
    <h1 className="font-semibold text-[#747474] text-sm sm:text-md xl:text-xl 2xl:text-lg "> {desc} </h1>
    </div>
   </div>
  );
}

export default BrandCart

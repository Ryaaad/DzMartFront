import Image from "next/image";
import Logo from "../../../../public/images/logo.png"

interface props{
  name:string
}


const CategoryCart:React.FC<props>=({name})=>{
  return (
   <div  style={{boxShadow: "0px 5px 22px rgba(0, 0, 0, 0.04)"}} className="cursor-pointer rounded-2xl flex flex-col items-center justify-center gap-2 w-[calc(100vw/2-30px)] h-32 sm:gap-3 sm:h-48 sm:w-[calc(100vw/2-40px)] md:w-[calc(100vw/3-45px)] lg:h-52 lg:w-[calc(100vw/4-45px)] 2xl:w-[calc(100vw/7)] ">
    <Image alt="Image" src={Logo} className="w-10 h-11 sm:w-12 sm:h-[50px] lg:w-[52px] lg:h-[55px] " ></Image>
    <h1 className="font-semibold tracking-wider text-xs sm:text-lg lg:text-xl "> {name}</h1>
   </div>
  );
}

export default CategoryCart

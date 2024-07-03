import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

interface props{
    setReviewScore: Dispatch<SetStateAction<number>>,
    ReviewScore: number
}

const Reviews:React.FC<props>=({setReviewScore,ReviewScore})=>{
    const [ScoreArr, setScoreArr] = useState([0,0,0,0,0]);
    const handleScore=(score : number)=>{
      setReviewScore(score)
    }
    useEffect(() => {
      console.log(ReviewScore);
      let TempArr=[0,0,0,0,0]
       for (let index = 0; index < TempArr.length; index++) {
          if(index<=ReviewScore)  TempArr[index]=1
          else TempArr[index]=0
       }
       setScoreArr(TempArr)
    }, [ReviewScore]);
    return (
        <div className="flex flex-col gap-2 my-5 w-full sm:w-1/2 md:w-full lg:my-0 lg:gap-3">
        <h1 className="font-semibold text-xl tracking-wide lg:text-2xl">Add a review</h1>
      
        <div className="flex items-center gap-2 text-base lg:text-xl">
            {[0,1,2,3,4].map((value=>(
            <FaStar onClick={()=>handleScore(value)} className={` ${ScoreArr[value] ? "text-scdOrang" : "text-[#e6f3fb]" } cursor-pointer`}/>
            )))}
        </div>
            <textarea name="Rating" id="Rating" cols={100} className="w-full border my-2 border-solid border-borderGray" />
        <div className="">
            <button className="uppercase w-full text-white bg-[#212529] rounded-md p-2 text-sm lg:text-base ">Submit review</button>
        </div>
    </div>
    )
}

export default Reviews
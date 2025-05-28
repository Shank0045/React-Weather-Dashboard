import React, { useContext, useEffect, useState } from 'react'
import { weatherData } from '../App'
import { BsClouds } from "react-icons/bs";
import { MdOutlineWbSunny } from "react-icons/md";
import { BsCloudRainHeavy } from "react-icons/bs";
import { BsSnow2 } from "react-icons/bs";

const Body = () => {

 let data=useContext(weatherData);
 const [List, setList] = useState([]);

 const [Unit, setUnit] = useState(true)

 let time=data?.data?.list.map((el)=>{
     return (el.dt_txt)
 });

useEffect(() => {


   let li=data?.data?.list.filter((el)=>{
     return (el.dt_txt.includes("15:00:00"))
 });


 setList(li)


}, [data]);



let changeUnit=(e)=>{
e.preventDefault();

setUnit((pre)=>{
   return !pre
})



}


    
  return (
    <div className='w-full  h-[70vh]  mt-[30px]  '>
     <div className='w-full   min-h-[35vh] max-h-max  px-[20px] md:flex-nowrap gap-[10px] flex-wrap flex items-center  justify-center md:justify-between ' > 
        <div className='w-[80vw]  md:w-[50vw] rounded-[50px] text-white bg-black md:mr-[20px]  max-h-max  min-h-[41.5vh] overflow-hidden items-center flex-col flex justify-center '> 
    
          { List?.[0]?.weather?.[0]?.main==="Clouds" ?  <BsClouds  className='text-[200px]'/>  : null   }
            {  List?.[0]?.weather?.[0]?.main==="Clear" ?    <MdOutlineWbSunny  className='text-[200px]'   /> : null}
            {  List?.[0]?.weather?.[0]?.main==="Rain" ?    <BsCloudRainHeavy   className='text-[200px]'   /> : null}
        { List?.[0]?.weather?.[0]?.main==="Snow" ?  <BsSnow2 className='text-[200px]' /> : null}

                <h1 className='w-[200px] max-h-max  min-h-[70px] text-center text-3xl md:text-5xl '> {List?.[0]?.weather?.[0]?.main} </h1>
             
             </div>
        <div className='w-[80vw]  md:w-[50vw] flex  items-center  md:items-end  rounded-[50px]  md:px-[30px] flex-col justify-center md:justify-self-start text-white bg-black max-h-max  min-h-[41.5vh] '>  
        <h1 className=' text-5xl md:text-7xl h-[100px] ' >{data?.data?.city?.name} </h1>
        <div className='text-4xl md:text-5xl  mt-[40px] h-[70px]'> {time?.[0].split(" ")[0]}</div>

        </div>
          </div>

    <div className='flex  lg:items-center flex-wrap lg:flex-nowrap  p-[20px] justify-center lg:gap-[0px]  gap-[10px] lg:justify-between'>

    <div className=' w-[80vw] lg:w-[47vw] flex justify-around text-white bg-black items-center rounded-[50px] flex-col max-h-max min-h-[40vh] '>
          <h1 className='font-[700]  p-[10px] text-center text-3xl md:text-4xl'> Weather Report </h1>

       <div className='flex items-center  flex-col justify-center'>
     <p className='  text-5xl'>
      {Unit ? List?.[0]?.main?.temp  : Math.floor((List?.[0]?.main?.temp  * 9/5) + 32)} <sup>{Unit ? "℃" : "℉"}</sup>
     </p>



<button onClick={(e)=>{
   changeUnit(e)
}}
  className="relative h-12 px-8  rounded-lg overflow-hidden mt-[20px] transition-all duration-500 group"
>
  <div
    className="absolute inset-0 rounded-lg p-[2px] bg-gradient-to-b from-[#654358] via-[#17092A] to-[#2F0D64]"
  >
    <div className="absolute inset-0 bg-[#170928] rounded-lg opacity-90"></div>
  </div>
  <div className="absolute inset-[2px] bg-[#170928] rounded-lg opacity-95"></div>
  <div
    className="absolute inset-[2px] bg-gradient-to-r from-[#170928] via-[#1d0d33] to-[#170928] rounded-lg opacity-90"
  ></div>
  <div
    className="absolute inset-[2px] bg-gradient-to-b from-[#654358]/40 via-[#1d0d33] to-[#2F0D64]/30 rounded-lg opacity-80"
  ></div>
  <div
    className="absolute inset-[2px] bg-gradient-to-br from-[#C787F6]/10 via-[#1d0d33] to-[#2A1736]/50 rounded-lg"
  ></div>
  <div
    className="absolute inset-[2px] shadow-[inset_0_0_15px_rgba(199,135,246,0.15)] rounded-lg"
  ></div>
  <div className="relative flex items-center justify-center gap-2">
    <span
      className="text-lg font-[500] bg-gradient-to-b from-[#D69DDE] to-[#B873F8] bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(199,135,246,0.4)] tracking-tighter"
    >
      Change Unit
    </span>
  </div>
  <div
    className="absolute inset-[2px] opacity-0 transition-opacity duration-300 bg-gradient-to-r from-[#2A1736]/20 via-[#C787F6]/10 to-[#2A1736]/20 group-hover:opacity-100 rounded-lg"
  ></div>
</button>





     <p className='text-2xl md:text-3xl mt-[20px] mb-[20px]  '> Humidity  {List?.[0]?.main?.humidity}%   </p>
     <p className=' text-2xl md:text-3xl  '> WindSpeed {List?.[0]?.wind?.speed} M/S    </p>
       </div>

      </div>

      <div className=' w-[80vw] lg:w-[59vw] flex  gap-[30px] lg:gap-0 lg:ml-[20px] flex-col items-center rounded-[50px] justify-around max-h-max  lg:flex-nowrap min-h-[40vh] bg-radial text-white bg-black'>
  
     <h1 className='font-[700]   text-2xl  my-[20px] p-[5px] text-center md:text-4xl'> Five Days Weather Report</h1>

     <div className='flex  mt-[7px] w-full gap-[20px] flex-wrap lg:flex-nowrap items-center justify-around'>{ List &&   List.map((el,index)=>{
         return(

         <div  className=' mx-[5px] h-[180px] hover:scale-[0.85] transition-[2s]  border-[1px] rounded-[30px] flex items-center justify-between flex-col   w-[250px]' key={index}>
            
            <div  className='text-2xl my-[10px]'> {el?.dt_txt.split(" ")[0]}</div>

    { el.weather?.[0]?.main==="Clouds" ?  <BsClouds  className='text-[70px] text-center'/>  : null   }
            {  el.weather?.[0]?.main==="Clear" ?    <MdOutlineWbSunny  className='text-[70px] text-center'   /> : null}
            {  el.weather?.[0]?.main==="Rain" ?    <BsCloudRainHeavy   className='text-[70px] text-center'   /> : null}
        { el.weather?.[0]?.main==="Snow" ?  <BsSnow2 className='text-[70px] text-center' /> : null}
        

    <div className='mb-[10px] text-center w-full text-2xl  '>{el?.main?.temp } <sup>℃</sup>
    </div>
  
  </div> )
      })} </div>

      </div>
    </div>
    </div>
  )
}

export default Body
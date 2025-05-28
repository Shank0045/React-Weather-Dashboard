import React, { useEffect, useRef, useState } from 'react'

const InputField = ({onChange}) => {

    let inputRef=useRef(null);


let setData=(e)=>{
e.preventDefault();

localStorage.setItem("pre",inputRef.current.value);

if(inputRef.current.value===' ' || inputRef.current.value===''){ 
    alert(" there is no such place , enter a valid place");
    return
}


onChange(inputRef.current.value);

inputRef.current.value=null

}

  return (
<>
<form className='flex pt-[50px] items-center justify-center' onSubmit={(e)=>{
     setData(e)
}}>
<input ref={inputRef} type="text" className='bg-white w-[300px] md:w-[500px] outline-none  h-[8vh] rounded-[50px] px-[30px] text-2xl text-black ' placeholder='Enter a Place' /> <button className='  w-[70px] md:w-[100px] h-[50px] rounded-[50px] bg-black text-white'>click</button>
</form>
</>
  )
}

export default InputField
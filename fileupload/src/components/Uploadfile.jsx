import React, { useState } from 'react'

function Uploadfile() {
    const [title,setTitle]=useState("");
    const [file,setFile]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        const formData=new FormData();
        formData.append("title",title);
        formData.append("file",file);
        console.log(title,file);
    }
  return (
    <>
    <div className='flex flex-col justify-center m-10 mx-[500px] border border-black rounded-md p-6  w-[500px]'>
        <form onSubmit={handleSubmit}>
       <input type='text' placeholder='Enter file name' required  className='border border-zinc-500 focus:outline-none  p-3 rounded-md' 
       onChange={(e)=>{setTitle(e.target.value)}}/>
       <br></br>
       <input type='file' accept='application/pdf' onChange={(e)=>{setFile(e.target.files)}} className='p-4' required/> 
       <button type='submit' className='bg-blue-500 mt-5 w-40 rounded-lg p-1 hover:bg-pink-400 focus:ring'>Upload File</button>
       </form>
    </div>
    </>
  )
}

export default Uploadfile


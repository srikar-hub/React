import React,{useState} from "react";



const HookExample2=()=>{
     const [data,setdata]=useState(false);


      const handle =()=>{
        setdata(true);
      }
     return(
      <>
      <button onClick={handle}>{data ? "hide" : "Show"}</button>
      {data ? <div>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed rem soluta quo eligendi nisi neque voluptatem recusandae, aspernatur nostrum perferendis labore. Perspiciatis ullam recusandae sapiente sunt ducimus minus suscipit facilis.
      </div>:<h1>Data is Hidden</h1>}
      </>
     );
}
export default HookExample2
import React,{useState} from 'react'


const UseHook=()=>{
    const data=[
        {
            id:"1",
          Name:"srikar",
          Age:"20",
          Branch:"cse",
        },{
            id:"2",
            Name:"srikaanth",
            Age:"20",
            Branch:"ece",
        },
    ]
    const [info,setinfo]=useState(data);
    
    
    const handleEvent=(comingid)=>{
        const deletedItem=info.filter((eachitem)=>{
            return eachitem.id !== comingid;
        })
         setinfo(deletedItem);
       
    }
    return (
     <div>
        <ul>
        {info.map((initial)=>{
            const {Name,Age,Branch,id} = initial;

            return  <li key={id}>
                <h1> my name is {Name}</h1>
                <h2> age {Age}</h2>
                <h3> Branch {Branch}</h3>
                <button onClick={()=>handleEvent(id)}>Delete</button>
            </li>
           
        })}</ul>
     </div>
    );

}

export default UseHook;



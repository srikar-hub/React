import React, { useState } from "react";

const Index2=()=>{
    const [list,setlist]=useState([]);
    const [message,setmessage]=useState({
    
        text:"",
        id:"",

    });


    const handleEvent=(e)=>{
          e.preventDefault();
        let obj={
            text:message.text,
            id:new Date().getTime().toString(),
        }
        setlist([...list,obj])
        setmessage({
            text:"",
            id:"",
        })
    }
   const changeMessage=(e)=>{
     setmessage({
        ...message,
        text:e.target.value,
        
     })
      
   }

   const deleteText=(comingid)=>{
      const obj =list.filter((eachid)=>{
       return eachid.id !== comingid;
       })
       setlist(obj);
   }
   const [editing,setEditing]=useState({
    id:"",
    isediting:false,
   });
  const changeEditState=(id)=>{
    setEditing({
        id:id,
        isediting:true,
    })
    let editableitem=list.find((eachitem)=>{
        return eachitem.id === id 
       
    })
    setmessage({
        ...message,
        text:editableitem.text,
        id:editableitem.id,
    })
    console.log(editableitem)

  }
  const changeEditE=(e)=>{
     e.preventDefault();
     let cmgText=list.map((eachitem)=>{
        if(eachitem.id===editing.id){
            return {
                text:message.text,
                id:editing.id,
            }
        }else{
            return eachitem;
        }
     })
     setlist(cmgText);
     setmessage({
        text:"",
        id:""
     })
     setEditing({
        id:"",
        isediting:false,
        
     })
  }
    return (
<div>
    <form >
        <input type="text" name="message" id="message" placeholder="ENter a message" value={message.text} onChange={changeMessage}/>
        {
            editing.isediting? <button type="submit" onClick={changeEditE}>edit</button> :<button onClick={handleEvent} >add</button>
        }
        
    </form>
   {
    list.length==0 &&
    <h4>THere is no item in the list</h4>
      
   }
    {list.map((eachiteam)=>{
        const {text,id}=eachiteam;
        return <ul key={id}>
            <li>{text}</li>
            <button onClick={()=>changeEditState(id)}>Edit</button>
            <button onClick={()=>deleteText(id)}>Delete</button>
        </ul>
       
    })}
</div>
    );
}


export default Index2;
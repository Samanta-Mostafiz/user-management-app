import React, { useState } from 'react'

const NewItem = ({handleNewItem}) => {

  // onchange value eikhane handle hocche
    const [newItem,setNew]=useState("");
    const handleAdd=(e)=>{
        setNew(e.target.value);

    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const newI={id:new Date().getTime().toLocaleString(),name:newItem};
        // console.log(newI);
        handleNewItem(newI);
        setNew("");
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='name' value={newItem} onChange={handleAdd}/>
        <button type='submit'>add</button>
      </form>
    </div>
  )
}

export default NewItem

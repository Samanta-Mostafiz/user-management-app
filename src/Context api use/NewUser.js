import React, { useContext, useState } from 'react'
import { UserContext } from './UserContext';

const NewUser = () => {
    const{users,setUsers}=useContext(UserContext);

  // onchange value eikhane handle hocche
    const [newUsers,setNewUsers]=useState("");

    const handleAdd=(e)=>{
        setNewUsers(e.target.value);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const newuser={id:new Date().getTime().toLocaleString(),name:newUsers};
        setUsers((prev)=>[...prev,newuser]);
        
        setNewUsers("");
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <input type='text' placeholder='name' value={newUsers} onChange={handleAdd}/>
        <button type='submit'>add</button>

      </form>
    </div>
  )
}

export default NewUser

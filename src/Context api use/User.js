import React, { useContext } from 'react'
import { UserContext } from './UserContext';

const User = ({user}) => {
    const{users,setUsers}=useContext(UserContext);
    const {id,name}=user;

    const handleDelete=()=>{
        alert(id);
        const filtered=users.filter((user)=>user.id!==id)
        // ekhane click kora id user id er sathe na mille baki gula update hoe jabe setuser funct er maddhome.
        setUsers(filtered);
    }
  return (
    <div>
      <p>{id}</p>
      <h1>{name}</h1>
      <button type='submit' onClick={()=>{handleDelete(id)}}>delete</button>
    </div>
  )
}

export default User

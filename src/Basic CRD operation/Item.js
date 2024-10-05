import React from 'react'

const Item = ({item,handleDeleteItem}) => {
    const{id,name}=item;
    // delete function
    const handleDelete=(id)=>{
        // alert(id);
        handleDeleteItem(id);
    }
  return (
    <div className='d'>
      <h1>{id}</h1>
      <p>{name}</p>
      <button type='submit' onClick={()=>{handleDelete(id)}}>delete</button>
    </div>
  )
}

export default Item

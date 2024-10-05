import React from 'react'
import Item from './Item'

const Items = ({items,handleDeleteItem}) => {
  return (
    <div>
      {items.map(item=><Item key={item.id} item={item} handleDeleteItem={handleDeleteItem}/>)}
    </div>
  )
}

export default Items

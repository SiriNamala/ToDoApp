import React from 'react'
import TodoCard from './TodoCard';

export default function TodoList(props) {

    const {todoStore, handleEdit, handleDelete} = props;

  return (
    <div className="flex flex-col max-h-80 overflow-auto">
    <ul>
    {todoStore.map( (item, itemIndex) => {
        return(
            <TodoCard key={itemIndex} index = {itemIndex} handleEdit = {handleEdit} handleDelete = {handleDelete}> {item}</TodoCard>
  
        );
    }
)
}
    </ul>
    </div>

  )
}

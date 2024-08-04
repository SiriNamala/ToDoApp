import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function TodoCard(props) {
    const {children, index, handleEdit, handleDelete} = props;

  return (
        <li className="flex flex-row justify-between break-wordsflex-wrap rounded-lg bg-yellow-50 max-w-sm m-1 p-1" key={index}>
        <span className="text-sm px-3 break-words">{children}</span>
        <div className="space-x-4">
        <button className =  "" onClick = {
            () => {
                handleEdit(index);
            }
        }>
            <FontAwesomeIcon icon="fa-pen-to-square" />

        </button>
        <button className = "px-2" onClick = {
            () => {
                handleDelete(index);
            }
        }>
            
            <FontAwesomeIcon icon="fa-trash-can" />

        </button>
        </div>
        </li>
  )
}

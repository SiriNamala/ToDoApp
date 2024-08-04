import React,{ useRef }  from 'react'

export default function TodoInput(props) {

  const {inputValue, setInputValue, handleAdd, inputRef} = props;

  return (
    <div className="flex flex-row justify-start space-x-3 m-4">
    <input 
    ref = {inputRef}
    className="rounded-md border-green-700 border-2 p-3"
    placeholder='Enter task' value={inputValue} 
    onChange={ (e) => {
      setInputValue(e.target.value);
      
    }}></input>
    <button className= "rounded-xl border-2 p-1 border-black" onClick = {handleAdd}> Add </button>
    </div>
  );
}


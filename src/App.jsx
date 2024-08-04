import MusicBar from './components/MusicBar';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import {useState, useRef, useEffect} from 'react';

function App() {

  const [todoStore, setTodoStore] = useState([]);
  const [inputValue, setInputValue] = useState();
  const inputRef = useRef(null);

  function storeData(newTodoList){
    localStorage.setItem('todoStore', JSON.stringify({
      todoStore : newTodoList
    }))
  } 

  function handleAdd(){
    const newTodoList = [...todoStore, inputValue];
    setTodoStore(newTodoList);
    storeData(newTodoList);
    setInputValue('');
  }
  
  function handleDelete(index){
    const newTodoList = todoStore.filter( (item, i) => {
      return (i !== index);
    })
    storeData(newTodoList);
    setTodoStore(newTodoList);
  }

  function handleEdit(index){

    setInputValue(todoStore[index]);
    handleDelete(index);
    inputRef.current.focus();

  }

  useEffect( ()=>{
    if(!localStorage){
      return
    }

    let localTodos = localStorage.getItem('todoStore')
    if(!localTodos){
      return;
    }

    localTodos = JSON.parse(localTodos).todoStore;
    setTodoStore(localTodos);
  }, [])

  return (
    
    <div className="flex flex-col justify-center min-h-screen">
    
    <div className="flex flex-col self-center m-2 max-w-lg border-2 p-5 max-h-80 overflow-y-auto rounded-md border-black">
    <h1 className='text-center text-2xl m-1'> Side Quests</h1>
    <TodoInput inputValue = {inputValue} setInputValue = {setInputValue} handleAdd = {handleAdd} inputRef = {inputRef}></TodoInput>
    <TodoList todoStore = {todoStore} handleEdit = {handleEdit} handleDelete = {handleDelete}/>
    </div>
    {/* <MusicBar></MusicBar> */}

    </div>
  );
}

export default App;

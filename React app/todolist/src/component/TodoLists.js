import React,{useState} from 'react';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';




export default function Time(){

  const [date,setdate]=useState("");
  const [time,settime]= useState("");
  const [todo,setTodo]=useState("");
  const [todos,setTodos]=useState([]);
  const [edit,setedit]=useState(0);



  
  const OnSubmit =(e)=>{
    e.preventDefault();

    if(edit){
      const editTodo = todos.find((i)=>i.id === edit);
      const updatedTodos = todos.map((t)=> t.id === editTodo.id ? 
        (t ={id: t.id,todo}) : {id:t.id,todo: t.todo}
      );
      setTodos(updatedTodos);
      setedit();
      setTodo("");
      return;
    }
    if(todo!==''){
      setTodos([{id:` ${Date.now()} ` ,todo },...todos]);
      setTodo("");
    }
};
const handleDelete =(id)=>{
  const delTodo=todos.filter((to)=>to.id !== id);
  setTodos([...delTodo]);
};
  const handleEdit = (id)=> {
    const editTodo = todos.find((i) => i.id === id);
    setTodo(editTodo.todo);
    setedit(id);
  };
  
  return(
    <div className="App">
      
    <form className="to-do" onSubmit={OnSubmit}>
    <h1 className='heading' >Todo List</h1>
    <div className="Date">
    <h2>Choose the data</h2>
   <input type="date"
     placeholder="choose date" value={date} onChange={(e)=>setdate(e.target.value)}/></div>
    <br/>
    <div className='Time'>
    <h2>Choose the time</h2>
    <input type="time" placeholder="choose time" value={time}  onChange={(e)=>settime(e.target.value)}
    /></div>
    <br/>
    
    <div className="Text">
    <h2>Write your Todo Happening ?</h2>
    <TextField type="text" value={todo} onChange={(e)=>setTodo(e.target.value)}
    
    label='Enter Todo here...'
    variant='outlined'
    required
    multiline
    rows={4}
    ></TextField>
<br/>

<div className="button">
<Button type="submit">{edit ? "update":"Add"}</Button></div>   
    
    </div>

    </form>

    <ul className="edit">
      {todos.map((t)=>(
        <li className="to-do">
          <span key={t.id}>{t.todo}{'  '}{date}{'  '}{time}</span>
      
          <Button onClick={()=>handleEdit(t.id)}>edit</Button>
          <Button onClick={()=>handleDelete(t.id)}>del</Button>
          </li>
      ))}
    </ul>
    
</div>
   
  )
}
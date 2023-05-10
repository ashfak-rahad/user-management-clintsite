import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users,setUsers] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:4000/users')
    .then(res => res.json())
    .then(data =>setUsers(data))
  },[])
  const handleAddUser =(event)=>{
    event.preventDefault();
    const form =event.target;
     const name =form.name.value;
     const email =form.email.value;
     const user = {name,email}
     console.log(user);
     fetch('http://localhost:4000/users',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(user)
     })
     .then (res =>res.json())
     .then(data =>{
      console.log(data);
      const newUsers =[...users,data]
      setUsers(newUsers);
      form.reset();

     })

  }
  return (
    <div className="App">
      <h1>User Management System</h1>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" id="" />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="submit" value="Add user" id="" />
      </form>
      <h3>Numbers of User:{users.length}</h3>
      <div>
        {
          users.map(user =><p key ={user.id}>ID:{user.id} <br />Name:{user.name} <br />Job:{user.job} <br /> Experience:{user.experience}</p>)
        }
      </div>
    </div>
  );
}

export default App;

import { useEffect } from "react";
import "./App.css";

function App() {
  const [users,setUsers] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:4000/users')
    .then(res => res.json())
    .then(data =>setUsers(data))
  },[])
  return (
    <div className="App">
      <h1>User Management System</h1>
      <h3>Numbers of User:{users.length}</h3>
    </div>
  );
}

export default App;

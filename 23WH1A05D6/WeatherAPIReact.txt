import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [data, setData] = useState([]);

  useEffect(() => {
    {
      fetch(url)
        .then((response) => response.json())
        .then((data) => setData(data));
    }
  }, []);

  return (
    <>
      <h1>Users</h1>
      <table className="w3-table-all w3-black w3-text-black">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        {data.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
          </tr>
        ))}
      </table>
    </>
  );
}

export default App;

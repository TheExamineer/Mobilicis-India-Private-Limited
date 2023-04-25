import { useState, useEffect } from 'react';
import Table from './components/Table';
import TableRow from './components/TableRow';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http//localhost:5000/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <Table>
        {users.map((user) => (
          <TableRow key={user._id} user={user} />
        ))}
      </Table>
    </div>
  );
}

export default App;

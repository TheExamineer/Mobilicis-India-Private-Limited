function TableRow({ user }) {
    return (
      <tr>
        <td>{user.firstName} {user.lastName}</td>
        <td>{user.email}</td>
        <td>{user.age}</td>
        <td>{user.gender}</td>
        <td>{user.phonePrice}</td>
        <td>{user.income}</td>
        <td>{user.car.brand} {user.car.model}</td>
        <td>{user.city}</td>
        <td>{user.quote}</td>
      </tr>
    );
  }
  
  export default TableRow;
  
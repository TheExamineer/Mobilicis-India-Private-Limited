
function Table({ children }) {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Phone Price</th>
            <th>Income</th>
            <th>Car</th>
            <th>City</th>
            <th>Quote</th>
          </tr>
        </thead>
        <tbody>
          {children}
        </tbody>
      </table>
    );
  }
  
  export default Table;
  
// App.js
import React, { useEffect, useState } from "react";

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/employees")
      .then(res => res.json())
      .then(data => setEmployees(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Employee Details (GET Method Example)</h2>
      <table border="1" style={{ margin: "auto", width: "60%" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Salary (₹)</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, i) => (
            <tr key={i}>
              <td>{emp.name}</td>
              <td>{emp.department}</td>
              <td>{emp.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

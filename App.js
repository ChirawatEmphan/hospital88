import { useEffect, useState } from "react";
import './App.css';

function App() {
  const [patient, setPatients] = useState();
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/patient");
      const { data } = await response?.json();
      setPatients(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="App">
      <header >
        <h2>Hospital System</h2>
      </header>
      <div>
        <h2>patient List</h2>
        {patient?.map((patient) => (<p> ID: {patient.id},Full Name: {patient.fullname}</p>))}
      </div>
    </div>
  );
}

export default App;

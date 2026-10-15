import { useState } from "react";

function StudentForm({ onAddStudent }) {
  const [name, setName] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [department, setDepartment] = useState("");
  const [marks, setMarks] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    onAddStudent({
      name,
      rollNumber,
      department,
      marks,
    });

    setName("");
    setRollNumber("");
    setDepartment("");
    setMarks("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Student</h2>

      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Roll Number"
        value={rollNumber}
        onChange={(e) => setRollNumber(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Marks"
        min="0"
        max="100"
        value={marks}
        onChange={(e) => setMarks(e.target.value)}
        required
      />

      <button type="submit">Add Student</button>
    </form>
  );
}

export default StudentForm;
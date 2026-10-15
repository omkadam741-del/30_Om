function StudentDetails({ students }) {
  return (
    <div>
      <h2>Student Details</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll Number</th>
            <th>Department</th>
            <th>Marks</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.rollNumber}</td>
              <td>{student.department}</td>
              <td>{student.marks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentDetails;
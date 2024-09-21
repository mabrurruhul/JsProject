document.getElementById('studentForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Fetch input values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const age = document.getElementById('age').value;
  const gender = document.getElementById('gender').value;
  const course = document.getElementById('course').value;
  const comments = document.getElementById('comments').value;

  // Basic Validation
  if (!name || !email || !age || !gender || !course) {
      alert("Please fill in all required fields.");
      return;
  }

  // Display form data
  document.getElementById('output').innerHTML = `
      <h2>Registration Summary</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Age:</strong> ${age}</p>
      <p><strong>Gender:</strong> ${gender}</p>
      <p><strong>Course:</strong> ${course}</p>
      <p><strong>Comments:</strong> ${comments || "None"}</p>
  `;

  // Clear form
  document.getElementById('studentForm').reset();
});

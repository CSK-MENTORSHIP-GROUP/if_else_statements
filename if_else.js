// Function to determine grade based on marks
function determineGrade(marks) {
    let grade;

    if (marks >= 70) {
        grade = 'A';
    } else if (marks >= 60) {
        grade = 'B';
    } else if (marks >= 50) {
        grade = 'C';
    } else if (marks >= 40) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    return grade;
}

// Event listener for the form submission
const gradeForm = document.getElementById('gradeForm');

// Event listener for the form submission
gradeForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const marks = Number(document.getElementById('marks').value); // Get marks from input
    const grade = determineGrade(marks); // Determine grade

    // Save the result div to a variable
    const resultDiv = document.getElementById('result');
    
    // Display the result
    resultDiv.innerText = `Your grade is: ${grade}`;
});

// document.getElementById('gradeForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent default form submission

//     const marks = parseInt(document.getElementById('marks').value); // Get marks from input
//     const grade = determineGrade(marks); // Determine grade

//     // Display the result
//     document.getElementById('result').innerText = `Your grade is: ${grade}`;
// });

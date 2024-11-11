// 1. Write a procedure to display a welcome message
function displayWelcomeMessage() {
    // Fill in here
    scores.innerHTML="welcome"
}

// 2. Write a function to add a new student
function addStudent(students, name, score) {
    // Fill in here
    // Example: students.push({ name: "Alice", score: 85 });
    students.push({ name: name, score: score });
};

// 3. Write a function to update a student's score
function updateScore(students, name, newScore) {
    // Fill in here
    // Hint: Use a loop to find the student by name and update their score
    for (let i = 0; i < students.length; i++) {
        if (students[i].name === name) {
            students[i].score = newScore;
            break;
        }
    }
}

// 4. Write a function to calculate the average score
function calculateAverageScore(students) {
    // Fill in here
    // Hint: Use a loop or the .reduce() method
    let total = 0;
    for (let i = 0; i < students.length; i++) {
        total += students[i].score;
    }
    let average = total / students.length;
    return average;
}

// 5. Write a procedure to display all scores and the average
function displayScores(students, averageScore) {
    // Fill in here
    // Example output: "Alice: 85, Bob: 90. Average score: 87.5."
    let output = "";
    for (let i = 0; i < students.length; i++) {
        output += students[i].name + ": " + students[i].score + ", ";
    }
    output += "Average score: " + averageScore;
    scores.innerHTML = output;
}

// Main Program
let students = []; // Start with an empty list
displayWelcomeMessage();
addStudent(students, "Alice", 85);
addStudent(students, "Bob", 90);
updateScore(students, "Alice", 95);
let averageScore = calculateAverageScore(students);
displayScores(students, averageScore);

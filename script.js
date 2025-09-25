// Define the folder structure and their respective index.html paths
const projects = [
  // 1 - Introduction to Javascript
  { name: "Task 1 Example - Basic Addition", folder: "1 - Introduction to Javascript", path: "Class Exercises/1 - Introduction to Javascript/Task 1 Example - Basic Addition/index.html", instructions: "Class Exercises/1 - Introduction to Javascript/Task 1 Example - Basic Addition/instructions.md" },
  { name: "Task 1a - Multiple Calculations", folder: "1 - Introduction to Javascript", path: "Class Exercises/1 - Introduction to Javascript/Task 1a - Multiple Calculations/index.html", instructions: "Class Exercises/1 - Introduction to Javascript/Task 1a - Multiple Calculations/instructions.md" },
  { name: "Task 1b - Area of a Triangle", folder: "1 - Introduction to Javascript", path: "Class Exercises/1 - Introduction to Javascript/Task 1b - Area of a Triangle/index.html", instructions: "Class Exercises/1 - Introduction to Javascript/Task 1b - Area of a Triangle/instructions.md" },
  { name: "Task 1c - Circles Calculations", folder: "1 - Introduction to Javascript", path: "Class Exercises/1 - Introduction to Javascript/Task 1c - Circles Calculations/index.html", instructions: "Class Exercises/1 - Introduction to Javascript/Task 1c - Circles Calculations/instructions.md" },
  { name: "Task 1d - Whats the Hypotenuse", folder: "1 - Introduction to Javascript", path: "Class Exercises/1 - Introduction to Javascript/Task 1d - Whats the Hypotenuse/index.html", instructions: "Class Exercises/1 - Introduction to Javascript/Task 1d - Whats the Hypotenuse/instructions.md" },
  { name: "Task 2 Example - Whats the Average", folder: "1 - Introduction to Javascript", path: "Class Exercises/1 - Introduction to Javascript/Task 2 Example - Whats the Average/index.html", instructions: "Class Exercises/1 - Introduction to Javascript/Task 2 Example - Whats the Average/instructions.md" },
  { name: "Task 2a - Mark Percentage", folder: "1 - Introduction to Javascript", path: "Class Exercises/1 - Introduction to Javascript/Task 2a - Mark Percentage/index.html", instructions: "Class Exercises/1 - Introduction to Javascript/Task 2a - Mark Percentage/instructions.md" },
  { name: "Task 2b - Temperature Converter", folder: "1 - Introduction to Javascript", path: "Class Exercises/1 - Introduction to Javascript/Task 2b - Temperature Converter/index.html", instructions: "Class Exercises/1 - Introduction to Javascript/Task 2b - Temperature Converter/instructions.md" },
  { name: "Task 2c - Convert to CM", folder: "1 - Introduction to Javascript", path: "Class Exercises/1 - Introduction to Javascript/Task 2c - Convert to CM/index.html", instructions: "Class Exercises/1 - Introduction to Javascript/Task 2c - Convert to CM/instructions.md" },
  { name: "Task 2d - Cement Order", folder: "1 - Introduction to Javascript", path: "Class Exercises/1 - Introduction to Javascript/Task 2d - Cement Order/index.html", instructions: "Class Exercises/1 - Introduction to Javascript/Task 2d - Cement Order/instructions.md" },
  { name: "Task 2e - Car Hire", folder: "1 - Introduction to Javascript", path: "Class Exercises/1 - Introduction to Javascript/Task 2e - Car Hire/index.html", instructions: "Class Exercises/1 - Introduction to Javascript/Task 2e - Car Hire/instructions.md" },
  { name: "Task 2f - Commission", folder: "1 - Introduction to Javascript", path: "Class Exercises/1 - Introduction to Javascript/Task 2f - Commission/index.html", instructions: "Class Exercises/1 - Introduction to Javascript/Task 2f - Commission/instructions.md" },
  { name: "Task 2g - Pay Rise", folder: "1 - Introduction to Javascript", path: "Class Exercises/1 - Introduction to Javascript/Task 2g - Pay Rise/index.html", instructions: "Class Exercises/1 - Introduction to Javascript/Task 2g - Pay Rise/instructions.md" },
  { name: "Task 2h - Overtime", folder: "1 - Introduction to Javascript", path: "Class Exercises/1 - Introduction to Javascript/Task 2h - Overtime/index.html", instructions: "Class Exercises/1 - Introduction to Javascript/Task 2h - Overtime/instructions.md" },
  { name: "Task 3 Example - Football", folder: "1 - Introduction to Javascript", path: "Class Exercises/1 - Introduction to Javascript/Task 3 Example - Football/index.html", instructions: "Class Exercises/1 - Introduction to Javascript/Task 3 Example - Football/instructions.md" },
  { name: "Task 3b - Color Changer", folder: "1 - Introduction to Javascript", path: "Class Exercises/1 - Introduction to Javascript/Task 3b - Color Changer/index.html", instructions: "Class Exercises/1 - Introduction to Javascript/Task 3b - Color Changer/instructions.md" },
  { name: "Task 3c - Image Resizer", folder: "1 - Introduction to Javascript", path: "Class Exercises/1 - Introduction to Javascript/Task 3c - Image Resizer/index.html", instructions: "Class Exercises/1 - Introduction to Javascript/Task 3c - Image Resizer/instructions.md" },
  { name: "Task 3d - Text Styler", folder: "1 - Introduction to Javascript", path: "Class Exercises/1 - Introduction to Javascript/Task 3d - Text Styler/index.html", instructions: "Class Exercises/1 - Introduction to Javascript/Task 3d - Text Styler/instructions.md" },
  { name: "Task 3e - Box Mover", folder: "1 - Introduction to Javascript", path: "Class Exercises/1 - Introduction to Javascript/Task 3e - Box Mover/index.html", instructions: "Class Exercises/1 - Introduction to Javascript/Task 3e - Box Mover/instructions.md" },

  // 2 - Javascript Selection
  { name: "Task 1 Example - Workers Pay", folder: "2 - Javascript Selection", path: "Class Exercises/2 - Javascript Selection/Task 1 Example - Workers Pay/index.html", instructions: "Class Exercises/2 - Javascript Selection/Task 1 Example - Workers Pay/instructions.md" },
  { name: "Task 1a - Golfing Handicap", folder: "2 - Javascript Selection", path: "Class Exercises/2 - Javascript Selection/Task 1a - Golfing Handicap/index.html", instructions: "Class Exercises/2 - Javascript Selection/Task 1a - Golfing Handicap/instructions.md" },
  { name: "Task 1b - Shopworker Pay", folder: "2 - Javascript Selection", path: "Class Exercises/2 - Javascript Selection/Task 1b - Shopworker Pay/index.html", instructions: "Class Exercises/2 - Javascript Selection/Task 1b - Shopworker Pay/instructions.md" },
  { name: "Task 1c - Maths Papers", folder: "2 - Javascript Selection", path: "Class Exercises/2 - Javascript Selection/Task 1c - Maths Papers/index.html", instructions: "Class Exercises/2 - Javascript Selection/Task 1c - Maths Papers/instructions.md" },
  { name: "Task 1d - Whats the Number", folder: "2 - Javascript Selection", path: "Class Exercises/2 - Javascript Selection/Task 1d - Whats the Number/index.html", instructions: "Class Exercises/2 - Javascript Selection/Task 1d - Whats the Number/instructions.md" },
  { name: "Task 2 Example - EasyPreston", folder: "2 - Javascript Selection", path: "Class Exercises/2 - Javascript Selection/Task 2 Example - EasyPreston/index.html", instructions: "Class Exercises/2 - Javascript Selection/Task 2 Example - EasyPreston/instructions.md" },
  { name: "Task 2a - A Level Grade", folder: "2 - Javascript Selection", path: "Class Exercises/2 - Javascript Selection/Task 2a - A Level Grade/index.html", instructions: "Class Exercises/2 - Javascript Selection/Task 2a - A Level Grade/instructions.md" },
  { name: "Task 2b - Vocational Grade", folder: "2 - Javascript Selection", path: "Class Exercises/2 - Javascript Selection/Task 2b - Vocational Grade/index.html", instructions: "Class Exercises/2 - Javascript Selection/Task 2b - Vocational Grade/instructions.md" },
  { name: "Task 2c - Car Insurance", folder: "2 - Javascript Selection", path: "Class Exercises/2 - Javascript Selection/Task 2c - Car Insurance/index.html", instructions: "Class Exercises/2 - Javascript Selection/Task 2c - Car Insurance/instructions.md" },
  { name: "Task 2d - Movie Tickets", folder: "2 - Javascript Selection", path: "Class Exercises/2 - Javascript Selection/Task 2d - Movie Tickets/index.html", instructions: "Class Exercises/2 - Javascript Selection/Task 2d - Movie Tickets/instructions.md" },
  { name: "Task 2e - Mortgage Calculator", folder: "2 - Javascript Selection", path: "Class Exercises/2 - Javascript Selection/Task 2e - Mortgage Calculator/index.html", instructions: "Class Exercises/2 - Javascript Selection/Task 2e - Mortgage Calculator/instructions.md" },
  { name: "Task 2f - Restaurant Bill", folder: "2 - Javascript Selection", path: "Class Exercises/2 - Javascript Selection/Task 2f - Restaurant Bill/index.html", instructions: "Class Exercises/2 - Javascript Selection/Task 2f - Restaurant Bill/instructions.md" },
  { name: "Task 2g - Phone Plan Selector", folder: "2 - Javascript Selection", path: "Class Exercises/2 - Javascript Selection/Task 2g - Phone Plan Selector/index.html", instructions: "Class Exercises/2 - Javascript Selection/Task 2g - Phone Plan Selector/instructions.md" },
  { name: "Task 2h - Holiday Package", folder: "2 - Javascript Selection", path: "Class Exercises/2 - Javascript Selection/Task 2h - Holiday Package/index.html", instructions: "Class Exercises/2 - Javascript Selection/Task 2h - Holiday Package/instructions.md" },
  { name: "Task 2i - School Grade Calculator", folder: "2 - Javascript Selection", path: "Class Exercises/2 - Javascript Selection/Task 2i - School Grade Calculator/index.html", instructions: "Class Exercises/2 - Javascript Selection/Task 2i - School Grade Calculator/instructions.md" },
  { name: "Task 2j - Fitness Club", folder: "2 - Javascript Selection", path: "Class Exercises/2 - Javascript Selection/Task 2j - Fitness Club/index.html", instructions: "Class Exercises/2 - Javascript Selection/Task 2j - Fitness Club/instructions.md" },

  // 3 - Javascript Iteration Using For
  { name: "Task 1 Example - Counting Up and Down", folder: "3 - Javascript Iteration Using For", path: "Class Exercises/3 - Javascript Iteration Using For/Task 1 Example - Counting Up and Down/index.html", instructions: "Class Exercises/3 - Javascript Iteration Using For/Task 1 Example - Counting Up and Down/instructions.md" },
  { name: "Task 1a - Count by Steps", folder: "3 - Javascript Iteration Using For", path: "Class Exercises/3 - Javascript Iteration Using For/Task 1a - Count by Steps/index.html", instructions: "Class Exercises/3 - Javascript Iteration Using For/Task 1a - Count by Steps/instructions.md" },
  { name: "Task 1b - Countdown Timer", folder: "3 - Javascript Iteration Using For", path: "Class Exercises/3 - Javascript Iteration Using For/Task 1b - Countdown Timer/index.html", instructions: "Class Exercises/3 - Javascript Iteration Using For/Task 1b - Countdown Timer/instructions.md" },
  { name: "Task 2 Example - Practicing Loops", folder: "3 - Javascript Iteration Using For", path: "Class Exercises/3 - Javascript Iteration Using For/Task 2 Example - Practicing Loops/index.html", instructions: "Class Exercises/3 - Javascript Iteration Using For/Task 2 Example - Practicing Loops/instructions.md" },
  { name: "Task 2a - Number Sequences", folder: "3 - Javascript Iteration Using For", path: "Class Exercises/3 - Javascript Iteration Using For/Task 2a - Number Sequences/index.html", instructions: "Class Exercises/3 - Javascript Iteration Using For/Task 2a - Number Sequences/instructions.md" },
  { name: "Task 2b - Multiplication Tables", folder: "3 - Javascript Iteration Using For", path: "Class Exercises/3 - Javascript Iteration Using For/Task 2b - Multiplication Tables/index.html", instructions: "Class Exercises/3 - Javascript Iteration Using For/Task 2b - Multiplication Tables/instructions.md" },

  // Task 3 - More Iteration Fun
  { name: "Task 3a - String Vowel Counter", folder: "3 - Javascript Iteration Using For", path: "Class Exercises/3 - Javascript Iteration Using For/Task 3a - String Vowel Counter/index.html", instructions: "Class Exercises/3 - Javascript Iteration Using For/Task 3a - String Vowel Counter/instructions.md" },
  { name: "Task 3b - Array Fun", folder: "3 - Javascript Iteration Using For", path: "Class Exercises/3 - Javascript Iteration Using For/Task 3b - Array Fun/index.html", instructions: "Class Exercises/3 - Javascript Iteration Using For/Task 3b - Array Fun/instructions.md" },
  { name: "Task 3c - Character Counter", folder: "3 - Javascript Iteration Using For", path: "Class Exercises/3 - Javascript Iteration Using For/Task 3c - Character Counter/index.html", instructions: "Class Exercises/3 - Javascript Iteration Using For/Task 3c - Character Counter/instructions.md" },
  { name: "Task 3d - Array Max Finder", folder: "3 - Javascript Iteration Using For", path: "Class Exercises/3 - Javascript Iteration Using For/Task 3d - Array Max Finder/index.html", instructions: "Class Exercises/3 - Javascript Iteration Using For/Task 3d - Array Max Finder/instructions.md" },

  // 6 - Functions and Procedures
  { name: "Geometry Calculator Problem", folder: "6 - Functions and Procedures", path: "Class Exercises/6 - Functions and Procedures/Geometry Calculator Problem/index.html", instructions: "Class Exercises/6 - Functions and Procedures/Geometry Calculator Problem/Instructions.md" },
  { name: "Grade Calculator Problem", folder: "6 - Functions and Procedures", path: "Class Exercises/6 - Functions and Procedures/Grade Calculator Problem/index.html", instructions: "Class Exercises/6 - Functions and Procedures/Grade Calculator Problem/Instructions.md" },
  { name: "Intro Exercise 1", folder: "6 - Functions and Procedures", path: "Class Exercises/6 - Functions and Procedures/Intro Exercise 1/index.html", instructions: "Class Exercises/6 - Functions and Procedures/Intro Exercise 1/Instructions.md" },
  { name: "Intro Exercise 2", folder: "6 - Functions and Procedures", path: "Class Exercises/6 - Functions and Procedures/Intro Exercise 2/index.html", instructions: "Class Exercises/6 - Functions and Procedures/Intro Exercise 2/Instructions.md" },
  { name: "Intro Exercise 3", folder: "6 - Functions and Procedures", path: "Class Exercises/6 - Functions and Procedures/Intro Exercise 3/index.html", instructions: "Class Exercises/6 - Functions and Procedures/Intro Exercise 3/Instructions.md" },
  { name: "Intro Exercise 4", folder: "6 - Functions and Procedures", path: "Class Exercises/6 - Functions and Procedures/Intro Exercise 4/index.html", instructions: "Class Exercises/6 - Functions and Procedures/Intro Exercise 4/Instructions.md" },
  { name: "Intro Exercise 5", folder: "6 - Functions and Procedures", path: "Class Exercises/6 - Functions and Procedures/Intro Exercise 5/index.html", instructions: "Class Exercises/6 - Functions and Procedures/Intro Exercise 5/Instructions.md" },
  { name: "Intro Exercise 6", folder: "6 - Functions and Procedures", path: "Class Exercises/6 - Functions and Procedures/Intro Exercise 6/index.html", instructions: "Class Exercises/6 - Functions and Procedures/Intro Exercise 6/Instructions.md" },
  { name: "Mathematical Functions Problem", folder: "6 - Functions and Procedures", path: "Class Exercises/6 - Functions and Procedures/Mathematical Functions Problem/index.html", instructions: "Class Exercises/6 - Functions and Procedures/Mathematical Functions Problem/Instructions.md" },
  { name: "Tax Calculator Problem", folder: "6 - Functions and Procedures", path: "Class Exercises/6 - Functions and Procedures/Tax Calculator Problem/index.html", instructions: "Class Exercises/6 - Functions and Procedures/Tax Calculator Problem/Instructions.md" },

  // 7 - Javascript Arrays
  { name: "Example", folder: "7 - Javascript Arrays", path: "Class Exercises/7 - Javascript Arrays/Example/index.html", instructions: "Class Exercises/7 - Javascript Arrays/Example/example.md" },
  { name: "Exercise 1 (1D Arrays)", folder: "7 - Javascript Arrays", path: "Class Exercises/7 - Javascript Arrays/Exercise 1 (1D Arrays)/index.html", instructions: "Class Exercises/7 - Javascript Arrays/Exercise 1 (1D Arrays)/Introduction to Arrays.md" },
  { name: "Practice Template 1D Arrays", folder: "7 - Javascript Arrays", path: "Class Exercises/7 - Javascript Arrays/Practice Template 1D Arrays/index.html", instructions: "Class Exercises/7 - Javascript Arrays/Practice Template 1D Arrays/example.md" },
  { name: "Treasure Hunt Template", folder: "7 - Javascript Arrays", path: "Class Exercises/7 - Javascript Arrays/Treasure Hunt Template/index.html", instructions: "" },

  // 8 - Sorting Algorithms
  { name: "Blank Template", folder: "8 - Sorting Algorithms", path: "Class Exercises/8 - Sorting Algorithms/Blank Template/index.html", instructions: "" },
  { name: "Bubble Sort Example", folder: "8 - Sorting Algorithms", path: "Class Exercises/8 - Sorting Algorithms/Bubble Sort/Bubble Sort Example/index.html", instructions: "" },
  { name: "Bubble Sort Example Easy", folder: "8 - Sorting Algorithms", path: "Class Exercises/8 - Sorting Algorithms/Bubble Sort/Bubble Sort Example Easy/index.html", instructions: "" },
  { name: "Bubble Sort Example Medium", folder: "8 - Sorting Algorithms", path: "Class Exercises/8 - Sorting Algorithms/Bubble Sort/Bubble Sort Example Medium/index.html", instructions: "" },
  { name: "Bubble Sort Example Hard", folder: "8 - Sorting Algorithms", path: "Class Exercises/8 - Sorting Algorithms/Bubble Sort/Bubble Sort Example Hard/index.html", instructions: "" },
  { name: "Bubble Sort Example Harder", folder: "8 - Sorting Algorithms", path: "Class Exercises/8 - Sorting Algorithms/Bubble Sort/Bubble Sort Example Harder/index.html", instructions: "" },
  { name: "Bubble Sort Assess", folder: "8 - Sorting Algorithms", path: "Class Exercises/8 - Sorting Algorithms/Bubble Sort/Bubble Sort Assess/index.html", instructions: "" },
  { name: "Insertion Sort Example", folder: "8 - Sorting Algorithms", path: "Class Exercises/8 - Sorting Algorithms/Insertion Sort/Insertion Sort Example/index.html", instructions: "" },
  { name: "Insertion Sort Example Easy", folder: "8 - Sorting Algorithms", path: "Class Exercises/8 - Sorting Algorithms/Insertion Sort/Insertion Sort Example Easy/index.html", instructions: "" },
  { name: "Insertion Sort Example Medium", folder: "8 - Sorting Algorithms", path: "Class Exercises/8 - Sorting Algorithms/Insertion Sort/Insertion Sort Example Medium/index.html", instructions: "" },
  { name: "Insertion Sort Example Hard", folder: "8 - Sorting Algorithms", path: "Class Exercises/8 - Sorting Algorithms/Insertion Sort/Insertion Sort Example Hard/index.html", instructions: "" },
  { name: "Insertion Sort Assess", folder: "8 - Sorting Algorithms", path: "Class Exercises/8 - Sorting Algorithms/Insertion Sort/Insertion Sort Assess/index.html", instructions: "" },
  { name: "Quick Sort Example (Lomuto Method)", folder: "8 - Sorting Algorithms", path: "Class Exercises/8 - Sorting Algorithms/Quick Sort/Quick Sort Example (Lomuto Method)/index.html", instructions: "" },
  { name: "Quick Sort Example (Hoare Method)", folder: "8 - Sorting Algorithms", path: "Class Exercises/8 - Sorting Algorithms/Quick Sort/Quick Sort Example (Hoare Method) copy/index.html", instructions: "" },
  { name: "Sorting Interactive", folder: "8 - Sorting Algorithms", path: "Class Exercises/8 - Sorting Algorithms/Sorting Interactive/index.html", instructions: "" },

  // 9 - Searching Algorithms
  { name: "Binary Search Example", folder: "9 - Searching Algorithms", path: "Class Exercises/9 - Searching Algorithms/Binary Search/Binary Search Example/index.html", instructions: "" },
  { name: "Linear Search Example", folder: "9 - Searching Algorithms", path: "Class Exercises/9 - Searching Algorithms/Linear Search/Linear Search Example/index.html", instructions: "" },

  // 9a - Searching Algorithms (duplicate for 9a)
  { name: "Binary Search Example (9a)", folder: "9a - Searching Algorithms", path: "Class Exercises/9a - Searching Algorithms/Binary Search/Binary Search Example/index.html", instructions: "" },
  { name: "Linear Search Example (9a)", folder: "9a - Searching Algorithms", path: "Class Exercises/9a - Searching Algorithms/Linear Search/Linear Search Example/index.html", instructions: "" },

// 10 - Object Oriented Programming
  // 1. Basic Class
  { name: "Task 1 Example - Basic Class", folder: "10 - Object Oriented Programming", path: "Class Exercises/10 - Object Oriented Programming/Task 1 Example - Basic Class/index.html", instructions: "Class Exercises/10 - Object Oriented Programming/Task 1 Example - Basic Class/instructions.md" },
  { name: "Task 1a - Practice Basic Class", folder: "10 - Object Oriented Programming", path: "Class Exercises/10 - Object Oriented Programming/Task 1a - Practice Basic Class/index.html", instructions: "Class Exercises/10 - Object Oriented Programming/Task 1a - Practice Basic Class/instructions.md" },
  { name: "Task 1b - Practice Basic Class", folder: "10 - Object Oriented Programming", path: "Class Exercises/10 - Object Oriented Programming/Task 1b - Practice Basic Class/index.html", instructions: "Class Exercises/10 - Object Oriented Programming/Task 1b - Practice Basic Class/instructions.md" },
  { name: "Task 1c - Practice Basic Class", folder: "10 - Object Oriented Programming", path: "Class Exercises/10 - Object Oriented Programming/Task 1c - Practice Basic Class/index.html", instructions: "Class Exercises/10 - Object Oriented Programming/Task 1c - Practice Basic Class/instructions.md" },
  // 2. Constructors
  { name: "Task 2 Example - Constructors", folder: "10 - Object Oriented Programming", path: "Class Exercises/10 - Object Oriented Programming/Task 2 Example - Constructors/index.html", instructions: "Class Exercises/10 - Object Oriented Programming/Task 2 Example - Constructors/instructions.md" },
  { name: "Task 2a - Practice Constructors", folder: "10 - Object Oriented Programming", path: "Class Exercises/10 - Object Oriented Programming/Task 2a - Practice Constructors/index.html", instructions: "Class Exercises/10 - Object Oriented Programming/Task 2a - Practice Constructors/instructions.md" },
  { name: "Task 2b - Practice Constructors", folder: "10 - Object Oriented Programming", path: "Class Exercises/10 - Object Oriented Programming/Task 2b - Practice Constructors/index.html", instructions: "Class Exercises/10 - Object Oriented Programming/Task 2b - Practice Constructors/instructions.md" },
  { name: "Task 2c - Practice Constructors", folder: "10 - Object Oriented Programming", path: "Class Exercises/10 - Object Oriented Programming/Task 2c - Practice Constructors/index.html", instructions: "Class Exercises/10 - Object Oriented Programming/Task 2c - Practice Constructors/instructions.md" },
  { name: "Task 2d - Practice Constructors", folder: "10 - Object Oriented Programming", path: "Class Exercises/10 - Object Oriented Programming/Task 2d - Practice Constructors/index.html", instructions: "Class Exercises/10 - Object Oriented Programming/Task 2d - Practice Constructors/instructions.md" },
  // 3. Inheritance
  { name: "Task 3a - Practice Inheritance", folder: "10 - Object Oriented Programming", path: "Class Exercises/10 - Object Oriented Programming/Task 3a - Practice Inheritance/index.html", instructions: "Class Exercises/10 - Object Oriented Programming/Task 3a - Practice Inheritance/instructions.md" },
  { name: "Task 3b - Practice Inheritance", folder: "10 - Object Oriented Programming", path: "Class Exercises/10 - Object Oriented Programming/Task 3b - Practice Inheritance/index.html", instructions: "Class Exercises/10 - Object Oriented Programming/Task 3b - Practice Inheritance/instructions.md" },
  { name: "Task 3c - Practice Inheritance", folder: "10 - Object Oriented Programming", path: "Class Exercises/10 - Object Oriented Programming/Task 3c - Practice Inheritance/index.html", instructions: "Class Exercises/10 - Object Oriented Programming/Task 3c - Practice Inheritance/instructions.md" },
  { name: "Task 3d - Practice Inheritance", folder: "10 - Object Oriented Programming", path: "Class Exercises/10 - Object Oriented Programming/Task 3d - Practice Inheritance/index.html", instructions: "Class Exercises/10 - Object Oriented Programming/Task 3d - Practice Inheritance/instructions.md" },
  // 4. Encapsulation
  { name: "Task 4a - Practice Encapsulation", folder: "10 - Object Oriented Programming", path: "Class Exercises/10 - Object Oriented Programming/Task 4a - Practice Encapsulation/index.html", instructions: "Class Exercises/10 - Object Oriented Programming/Task 4a - Practice Encapsulation/instructions.md" },
  { name: "Task 4b - Practice Encapsulation", folder: "10 - Object Oriented Programming", path: "Class Exercises/10 - Object Oriented Programming/Task 4b - Practice Encapsulation/index.html", instructions: "Class Exercises/10 - Object Oriented Programming/Task 4b - Practice Encapsulation/instructions.md" },
  { name: "Task 4c - Practice Encapsulation", folder: "10 - Object Oriented Programming", path: "Class Exercises/10 - Object Oriented Programming/Task 4c - Practice Encapsulation/index.html", instructions: "Class Exercises/10 - Object Oriented Programming/Task 4c - Practice Encapsulation/instructions.md" },
  { name: "Task 4d - Practice Encapsulation", folder: "10 - Object Oriented Programming", path: "Class Exercises/10 - Object Oriented Programming/Task 4d - Practice Encapsulation/index.html", instructions: "Class Exercises/10 - Object Oriented Programming/Task 4d - Practice Encapsulation/instructions.md" },
  // 5. Getters & Setters
  { name: "Task 5a - Practice Getters Setters", folder: "10 - Object Oriented Programming", path: "Class Exercises/10 - Object Oriented Programming/Task 5a - Practice Getters Setters/index.html", instructions: "Class Exercises/10 - Object Oriented Programming/Task 5a - Practice Getters Setters/instructions.md" },
  { name: "Task 5b - Practice Getters Setters", folder: "10 - Object Oriented Programming", path: "Class Exercises/10 - Object Oriented Programming/Task 5b - Practice Getters Setters/index.html", instructions: "Class Exercises/10 - Object Oriented Programming/Task 5b - Practice Getters Setters/instructions.md" },
  { name: "Task 5c - Practice Getters Setters", folder: "10 - Object Oriented Programming", path: "Class Exercises/10 - Object Oriented Programming/Task 5c - Practice Getters Setters/index.html", instructions: "Class Exercises/10 - Object Oriented Programming/Task 5c - Practice Getters Setters/instructions.md" },
  { name: "Task 5d - Practice Getters Setters", folder: "10 - Object Oriented Programming", path: "Class Exercises/10 - Object Oriented Programming/Task 5d - Practice Getters Setters/index.html", instructions: "Class Exercises/10 - Object Oriented Programming/Task 5d - Practice Getters Setters/instructions.md" },
  // 6. Polymorphism
  { name: "Task 6a - Practice Polymorphism", folder: "10 - Object Oriented Programming", path: "Class Exercises/10 - Object Oriented Programming/Task 6a - Practice Polymorphism/index.html", instructions: "Class Exercises/10 - Object Oriented Programming/Task 6a - Practice Polymorphism/instructions.md" },
  { name: "Task 6b - Practice Polymorphism", folder: "10 - Object Oriented Programming", path: "Class Exercises/10 - Object Oriented Programming/Task 6b - Practice Polymorphism/index.html", instructions: "Class Exercises/10 - Object Oriented Programming/Task 6b - Practice Polymorphism/instructions.md" },
  { name: "Task 6c - Practice Polymorphism", folder: "10 - Object Oriented Programming", path: "Class Exercises/10 - Object Oriented Programming/Task 6c - Practice Polymorphism/index.html", instructions: "Class Exercises/10 - Object Oriented Programming/Task 6c - Practice Polymorphism/instructions.md" },
  { name: "Task 6d - Practice Polymorphism", folder: "10 - Object Oriented Programming", path: "Class Exercises/10 - Object Oriented Programming/Task 6d - Practice Polymorphism/index.html", instructions: "Class Exercises/10 - Object Oriented Programming/Task 6d - Practice Polymorphism/instructions.md" },
  // 7. Overloading & Overriding
  { name: "Task 7a - Practice Overloading and Overriding", folder: "10 - Object Oriented Programming", path: "Class Exercises/10 - Object Oriented Programming/Task 7a - Practice Overloading and Overriding/index.html", instructions: "Class Exercises/10 - Object Oriented Programming/Task 7a - Practice Overloading and Overriding/instructions.md" },
  { name: "Task 7b - Practice Overloading and Overriding", folder: "10 - Object Oriented Programming", path: "Class Exercises/10 - Object Oriented Programming/Task 7b - Practice Overloading and Overriding/index.html", instructions: "Class Exercises/10 - Object Oriented Programming/Task 7b - Practice Overloading and Overriding/instructions.md" },
  { name: "Task 7c - Practice Overloading and Overriding", folder: "10 - Object Oriented Programming", path: "Class Exercises/10 - Object Oriented Programming/Task 7c - Practice Overloading and Overriding/index.html", instructions: "Class Exercises/10 - Object Oriented Programming/Task 7c - Practice Overloading and Overriding/instructions.md" },


];

// Group projects by folder
const groupedProjects = projects.reduce((groups, project) => {
  if (!groups[project.folder]) {
    groups[project.folder] = [];
  }
  groups[project.folder].push(project);
  return groups;
}, {});

// Function to fetch and parse markdown content
async function fetchMarkdown(path) {
  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error('Failed to fetch markdown');
    const text = await response.text();
    return marked.parse(text);
  } catch (error) {
    console.error('Error fetching markdown:', error);
    return 'Failed to load instructions';
  }
}

// Function to show modal with content
function showModal(content) {
  const existingModal = document.querySelector('.modal');
  if (existingModal) existingModal.remove();

  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close">&times;</span>
      <div class="markdown-content">${content}</div>
    </div>
  `;

  modal.querySelector('.close').onclick = () => modal.remove();
  modal.onclick = (e) => {
    if (e.target === modal) modal.remove();
  };
  
  document.body.appendChild(modal);
}

// Function to create a topic card
function createTopicCard(title, projects) {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <h3>${title}</h3>
    <div class="card-overlay">
      <button class="view-btn">View Tasks</button>
    </div>
  `;

  card.querySelector('.view-btn').onclick = () => {
    renderTasks(title, projects);
    updateBreadcrumb(title);
  };

  return card;
}

// Function to create a task card
function createTaskCard(task) {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <h3>${task.name}</h3>
    <div class="card-overlay">
      <button class="view-btn">View Project</button>
      <button class="instructions-btn">Instructions</button>
    </div>
  `;

  card.querySelector('.view-btn').onclick = () => {
    window.location.href = task.path;
  };

  card.querySelector('.instructions-btn').onclick = async () => {
    const content = await fetchMarkdown(task.instructions);
    showModal(content);
  };

  return card;
}

// Function to update breadcrumb navigation
function updateBreadcrumb(currentPath) {
  const breadcrumb = document.querySelector('.breadcrumb');
  breadcrumb.innerHTML = `
    <a href="#" onclick="renderTopics()">Home</a>
    ${currentPath ? ` > ${currentPath}` : ''}
  `;
}

// Function to render topics (main view)
function renderTopics() {
  const container = document.querySelector('.content');
  container.innerHTML = '';
  updateBreadcrumb();

  Object.entries(groupedProjects).forEach(([topic, projects]) => {
    const card = createTopicCard(topic, projects);
    container.appendChild(card);
  });
}

// Function to render tasks for a specific topic
function renderTasks(topic, projects) {
  const container = document.querySelector('.content');
  container.innerHTML = '';

  projects.forEach(task => {
    const card = createTaskCard(task);
    container.appendChild(card);
  });
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  renderTopics();
});
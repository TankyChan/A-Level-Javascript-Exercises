# Exercise

Create a comprehensive school grade calculator that determines a student's final grade based on multiple assessment types and weightings:

1. Assessment Types and Weights:
   - Coursework (30% of final grade)
     * Assignment 1 (40% of coursework)
     * Assignment 2 (60% of coursework)
   
   - Tests (40% of final grade)
     * Mid-term Test (40% of tests)
     * Final Test (60% of tests)
   
   - Class Participation (30% of final grade)
     * Attendance (40% of participation)
     * Class Activities (60% of participation)

2. Grade Boundaries:
   - A*: 90% and above
   - A: 80-89%
   - B: 70-79%
   - C: 60-69%
   - D: 50-59%
   - E: 40-49%
   - U: Below 40%

3. Additional Requirements:
   - Must achieve at least 40% in both coursework and tests to pass
   - Final grade cannot be more than one grade higher than test grade
   - Missing assignments count as 0%
   - Attendance below 80% caps the participation grade at 50%

The program should:
1. Allow input of all assignment and test scores
2. Calculate weighted averages for each component
3. Apply grade boundary rules
4. Show detailed breakdown of calculations
5. Display final grade with feedback comments

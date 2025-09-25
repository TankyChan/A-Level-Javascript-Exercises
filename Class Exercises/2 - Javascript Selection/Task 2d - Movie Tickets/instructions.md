# Exercise

Create a movie ticket booking program that calculates the total cost based on the following rules:

1. Base ticket prices:
   - Adult (18-65): £12.00
   - Child (under 18): £8.00
   - Senior (over 65): £7.50

2. Day of week adjustments:
   - Monday to Thursday: No change
   - Friday to Sunday: Add £2.50 to each ticket

3. Showing time adjustments:
   - Before 5 PM: Subtract £1.50
   - After 5 PM: No change

4. Special discounts:
   - Family ticket (2 adults + 2 children): 10% off total
   - Group booking (6 or more tickets): 15% off total

The program should allow the user to input:
- Number of adult tickets
- Number of child tickets
- Number of senior tickets
- Day of the week
- Showing time (24-hour format)

It should then calculate and display:
- The subtotal before any discounts
- Any applicable discounts
- The final total cost

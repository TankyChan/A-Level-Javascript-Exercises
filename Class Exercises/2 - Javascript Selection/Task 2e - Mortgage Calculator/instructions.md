# Exercise

Create a mortgage calculator that determines the monthly payment and loan eligibility based on the following criteria:

1. House Price and Deposit:
   - Minimum deposit required: 10% of house price
   - Deposit percentage affects interest rate:
     * 10-15%: Base rate + 2%
     * 16-25%: Base rate + 1%
     * Above 25%: Base rate (3%)

2. Credit Score Impact:
   - Excellent (800-950): -0.5% from interest rate
   - Good (700-799): No change
   - Fair (600-699): +0.5% to interest rate
   - Poor (below 600): +1% to interest rate

3. Employment Status:
   - Employed (Full-time): Can borrow up to 4.5× annual salary
   - Self-employed: Can borrow up to 4× annual salary
   - Part-time: Can borrow up to 3.5× annual salary

The program should:
1. Collect all necessary information
2. Calculate monthly payments based on a 25-year term
3. Determine if the loan amount is within acceptable limits
4. Display the monthly payment, total amount repayable, and whether the application would likely be accepted

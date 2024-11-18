// 1. Write a procedure to display a welcome message
function displayWelcomeMessage() {
    // Fill in here
    receipt.innerHTML = "welcome";
}

// 2. Write a function to calculate the total price of items in the cart
function calculateTotal(cart) {
    // Fill in here
    // Hint: Use a loop or the .reduce() method
    let ptotal = 0
    for (let i = 0; i < cart.length; i++){
        ptotal += cart[i];
    }
    return ptotal; 
}

// 3. Write a function to apply a discount
function applyDiscount(Ftotal) {
    // Fill in here
    // Example: Apply a 10% discount if total > $100
    if (Ftotal  > 100){
        Ftotal = Ftotal*0.9;
    }
    return Ftotal;
}

// 4. Write a function to calculate the final price after tax
function calculateFinalPrice(totalAfterDiscountF, taxRateF) {
    // Fill in here
    let final = totalAfterDiscountF*(1+taxRateF)
    return final
}

// 5. Write a procedure to display the receipt
function displayReceipt(totalF, finalPriceF) {
    // Fill in here
    // Example output: "The total before tax is $120. The final price after tax is $130.80."
    receipt.innerHTML = "The total before tax is £"+totalF+". The final price after tax is £"+finalPriceF+".";

}

// Main Program
const shoppingCart = [29.99, 49.99, 19.99, 34.99]; // Example items
const taxRate = 0.08; // 8% tax
displayWelcomeMessage();
const total = calculateTotal(shoppingCart);
const totalAfterDiscount = applyDiscount(total);
const finalPrice = calculateFinalPrice(totalAfterDiscount, taxRate);
displayReceipt(total, finalPrice);

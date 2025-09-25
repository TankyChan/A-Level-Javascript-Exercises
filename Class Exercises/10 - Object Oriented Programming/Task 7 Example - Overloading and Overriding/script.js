// Base Calculator class
class Calculator {
  add(a, b) {
    return a + b;
  }
}

// AdvancedCalculator overrides add and simulates overloading
class AdvancedCalculator extends Calculator {
  // Method overriding
  add(a, b) {
    // Simulate overloading: if only one argument, double it
    if (b === undefined) {
      return a * 2;
    }
    // Otherwise, normal addition
    return a + b;
  }
}

document.getElementById("btnShow").onclick = function() {
  const calc = new Calculator();
  const advCalc = new AdvancedCalculator();
  let out = "Calculator add(2, 3): " + calc.add(2, 3) + "\n";
  out += "AdvancedCalculator add(2, 3): " + advCalc.add(2, 3) + "\n";
  out += "AdvancedCalculator add(5): " + advCalc.add(5) + "\n";
  document.getElementById("output").innerText = out;
};

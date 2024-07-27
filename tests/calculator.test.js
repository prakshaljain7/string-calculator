const Calculator = require("../calculator");

test("should return 0 for case of an empty string", () => {
    const calculator = new Calculator();
    expect(calculator.Add("")).toBe(0);
});

test("Should add two numbers provided in a string", () => {
    const calculator = new Calculator();
    expect(calculator.Add("2,5")).toBe(7);
});

test("Shouuld return sum of numbers in case of multiple numbers", () => {
    const calculator = new Calculator();
    expect(calculator.Add("3,4,7,10,11,14")).toBe(49);
});

const Calculator = require("../calculator");

test("should return 0 for case of an empty string", () => {
    const calculator = new Calculator();
    expect(calculator.Add("")).toBe(0);
});

test("Should add two numbers provided in a string", () => {
    const calculator = new Calculator();
    expect(calculator.Add("2,5")).toBe(7);
});

test("Should return sum of numbers in case of multiple numbers", () => {
    const calculator = new Calculator();
    expect(calculator.Add("3,4,7,10,11,14")).toBe(49);
});

test("Should return sum of numbers in case of new line added in string", () => {
    const calculator = new Calculator();
    expect(calculator.Add("7\n10")).toBe(17);
    expect(calculator.Add("3,4,7\n10\n11,14")).toBe(49);
});

test("Should handle a different delimiter", () => {
    const calculator = new Calculator();
    expect(calculator.Add("//;\n1;2")).toBe(3);
    expect(calculator.Add("//;\n3;4;7;10;11;14")).toBe(49);
});

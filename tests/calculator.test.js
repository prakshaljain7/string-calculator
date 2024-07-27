const Calculator = require("../calculator");

test("should return 0 for case of an empty string", () => {
    const calculator = new Calculator();
    expect(calculator.Add("")).toBe(0);
});

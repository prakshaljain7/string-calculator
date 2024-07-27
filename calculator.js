class Calculator {
    Add(number_strings) {
        if (number_strings == "") {
            return 0;
        }
        const arr = number_strings.split(",").map((item) => parseInt(item));
        return arr.reduce((acc, itr) => acc + itr);
    }
}

module.exports = Calculator;

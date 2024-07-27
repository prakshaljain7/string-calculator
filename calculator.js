class Calculator {
    Add(number_strings) {
        if (number_strings == "") {
            return 0;
        }
        let new_str = number_strings.replace(/\n/g, ",");
        const arr = new_str.split(",").map((item) => parseInt(item));
        return arr.reduce((acc, itr) => acc + itr);
    }
}

module.exports = Calculator;

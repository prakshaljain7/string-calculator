class Calculator {
    Add(number_strings) {
        if (number_strings == "") {
            return 0;
        }
        let new_str = number_strings;
        let delimiter = ",";
        if (number_strings.startsWith("//")) {
            delimiter = number_strings.at(2);
            new_str = new_str.substring(4);
        }
        new_str = new_str.replace(/\n/g, delimiter);
        const arr = new_str.split(delimiter).map((item) => parseInt(item));
        const negative_numbers = arr.filter((number) => number < 0);
        if (negative_numbers.length > 0) {
            throw new Error(
                `Negatives not allowed: ${negative_numbers.join(",")}`
            );
        }
        return arr.reduce((acc, itr) => acc + itr);
    }
}

module.exports = Calculator;

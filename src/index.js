module.exports = function toReadable (number) {
    let arr1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let arr2 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let result = '';

    if (number.toString().length === 3) {
        result += arr1[Math.trunc(number / 100)] + ' hundred';
        number -= Math.trunc(number / 100) * 100;
        if (number === 0) {
            return result;
        }
    }

    if (number.toString().length === 2) {
        if (number < 20) {
            result += ' ' + arr1[number];
            return result.trim();
        } else {
            result += ' ' + arr2[Math.trunc(number / 10) - 2];
            number -= Math.trunc(number / 10) * 10;
            if (number === 0) {
                return result.trim();
            }
        }
    }

    if (number.toString().length === 1) {
        result += ' ' + arr1[number];
        return result.trim();
    }
}

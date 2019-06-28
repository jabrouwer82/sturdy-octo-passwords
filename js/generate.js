import OptionSet from './optionSet.js';
const sourceNames = ['numbers', 'lower'];
const sourceValues = new Map([
    ['numbers', '0123456789'],
    ['lower', 'abcdefghijklmnopqrstuvwxyz'],
    ['upper', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'],
    ['symbols', '`~!@#$%^&*()-_=+;:\'"[{]}\\|/?.>,< '],
]);
function generate(event) {
    const t = new OptionSet();
}
function checkGroup(group) {
}
function rand() {
    const arr = new Int16Array(50);
    window.crypto.getRandomValues(arr);
    document.querySelector('.insert-area').innerHTML = Array
        .from(arr)
        .map((point) => {
        try {
            return String.fromCodePoint(point);
        }
        catch (err) {
            if (err instanceof RangeError) {
                return '.';
            }
            throw err;
        }
    })
        .join('');
}
const generateButton = document.querySelector('button');
generateButton.addEventListener('click', rand);
//# sourceMappingURL=generate.js.map
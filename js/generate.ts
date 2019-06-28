import OptionSet from './optionSet.js';

const sourceNames = ['numbers', 'lower'];
const sourceValues = new Map([
  ['numbers', '0123456789'],
  ['lower', 'abcdefghijklmnopqrstuvwxyz'],
  ['upper', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'],
  ['symbols', '`~!@#$%^&*()-_=+;:\'"[{]}\\|/?.>,< '],
]);

interface Group {
  enabled: boolean;

//     <details>
//       <summary>
//         <input type="checkbox" name="numbers-check" id="numbers-check" checked>
//         <label for="numbers-check">Include Numbers</label>
//       </summary>

//       <input type="radio" name="numbers-amt" id="numbers-amt-min-max" value="min-max">
//       <label for="numbers-amt">
//         <label for="numbers-min">Minimum</label>
//         <input type="number" id="numbers-min" value="3">
//         <label for="numbers-max">Maximum</label>
//         <input type="number" id="numbers-max" placeholder="Unlimited">
//       </label>
//       <br>
//       <input type="radio" name="numbers-amt" id="numbers-amt-exact" value="exact">
//       <label for="numbers-amt">
//         <label for="numbers-exact">Exactly</label>
//         <input type="number" id="numbers-exact" value="5">
//       </label>
//     </details>

} 

function generate(event: UIEvent): void {
  const t = new OptionSet();
}

function checkGroup(group: string): void {

}

function rand(): void {
  const arr = new Int16Array(50);
  window.crypto.getRandomValues(arr);
  document.querySelector('.insert-area')!.innerHTML = Array
    .from(arr)
    .map((point): string => {
      try {
        return String.fromCodePoint(point);
      } catch (err) {
        if (err instanceof RangeError) {
          return '.';
        }
        throw err;
      }
    })
    .join('');
}

const generateButton = document.querySelector('button')!;
generateButton.addEventListener('click', rand);

let characters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '~',
  '`',
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '_',
  '-',
  '+',
  '=',
  '{',
  '[',
  '}',
  ']',
  ',',
  '|',
  ':',
  ';',
  '<',
  '>',
  '.',
  '?',
  '/',
];

let arrToWorKOn = characters.slice();

function generateRandomPassword() {
  let randomPassword1 = '';
  let randomPassword2 = '';
  let passwordLength = document.getElementById('password-length').value;
  let withoutSymbols = document.getElementById('no-symbols');
  let withoutNumbers = document.getElementById('no-numbers');
  if (withoutSymbols.checked) {
    arrToWorKOn = removeSymbols();
  }

  if (withoutNumbers.checked) {
    arrToWorKOn = removeNumbers();
  }

  if (withoutSymbols.checked && withoutNumbers.checked) {
    arrToWorKOn = removeSymbolsAndNumbers();
  }

  if (!withoutSymbols.checked && !withoutNumbers.checked) {
    arrToWorKOn = characters.slice();
  }

  if (passwordLength.length === 0) {
    for (let i = 0; i < 15; i++) {
      randomPassword1 +=
        arrToWorKOn[Math.floor(Math.random() * arrToWorKOn.length)];
      randomPassword2 +=
        arrToWorKOn[Math.floor(Math.random() * arrToWorKOn.length)];
    }
    let leftResult = document.getElementById('left-result');
    let rightResult = document.getElementById('right-result');

    leftResult.textContent = randomPassword1;
    rightResult.textContent = randomPassword2;
  } else {
    for (let i = 0; i < passwordLength; i++) {
      randomPassword1 +=
        arrToWorKOn[Math.floor(Math.random() * arrToWorKOn.length)];
      randomPassword2 +=
        arrToWorKOn[Math.floor(Math.random() * arrToWorKOn.length)];
    }
    let leftResult = document.getElementById('left-result');
    let rightResult = document.getElementById('right-result');

    leftResult.textContent = randomPassword1;
    rightResult.textContent = randomPassword2;
  }
}

function copyTextLeft() {
  let copiedDiv = document.querySelector('#copiedLeft');
  let copiedText = document.getElementById('left-result').innerHTML;
  if (copiedText.length === 0) return;
  navigator.clipboard.writeText(copiedText);
  copiedDiv.style.padding = '10px';
  document.getElementById('copiedLeft').textContent = 'Copied to clipboard';

  setTimeout(() => {
    copiedDiv.classList.add('hidden');
  }, 700);
  copiedDiv.classList.remove('hidden');
}

function copyTextRight() {
  let copiedDiv = document.querySelector('#copiedRight');
  let copiedText = document.getElementById('right-result').innerHTML;
  if (copiedText.length === 0) return;
  navigator.clipboard.writeText(copiedText);
  copiedDiv.style.padding = '10px';
  document.getElementById('copiedRight').textContent = 'Copied to clipboard';

  setTimeout(() => {
    copiedDiv.classList.add('hidden');
  }, 700);
  copiedDiv.classList.remove('hidden');
}

function removeSymbols() {
  let symbols = [
    '~',
    '`',
    '!',
    '@',
    '#',
    '$',
    '%',
    '^',
    '&',
    '*',
    '(',
    ')',
    '_',
    '-',
    '+',
    '=',
    '{',
    '[',
    '}',
    ']',
    ',',
    '|',
    ':',
    ';',
    '<',
    '>',
    '.',
    '?',
    '/',
  ];

  let letters = characters.filter((character) => !symbols.includes(character));
  return letters;
}

function removeNumbers() {
  let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  return characters.filter((character) => numbers.indexOf(character) === -1);
}

function removeSymbolsAndNumbers() {
  let symbolsAndNumbers = [
    '~',
    '`',
    '!',
    '@',
    '#',
    '$',
    '%',
    '^',
    '&',
    '*',
    '(',
    ')',
    '_',
    '-',
    '+',
    '=',
    '{',
    '[',
    '}',
    ']',
    ',',
    '|',
    ':',
    ';',
    '<',
    '>',
    '.',
    '?',
    '/',
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
  ];

  return characters.filter(
    (character) => symbolsAndNumbers.indexOf(character) === -1
  );
}

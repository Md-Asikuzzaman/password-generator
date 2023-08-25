const display = document.querySelector('#password') as HTMLInputElement;
const generate = document.querySelector('.generate__btn') as HTMLButtonElement;
const copy__btn = document.querySelector('.copy__btn') as HTMLHtmlElement;
const copyedit__btn = document.querySelector(
  '.copyedit__btn'
) as HTMLHtmlElement;

generate.addEventListener('click', (e) => {
  e.preventDefault();
  passwordGenerate();
});

const passwordGenerate = () => {
  let chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
    'abcdefghijklmnopqrstuvwxyz' +
    '0123456789' +
    '@#$%?/!&*';
  var passwordLength = 8;
  var password = '';

  for (let i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }

  display.value = password;

  copy__btn.classList.remove('hidden');
  copyedit__btn.classList.remove('visible');
};

copy__btn.addEventListener('click', () => {
  navigator.clipboard.writeText(display.value);

  copy__btn.classList.add('hidden');
  copyedit__btn.classList.add('visible');

  setTimeout(() => {
    copy__btn.classList.remove('hidden');
    copyedit__btn.classList.remove('visible');
  }, 3000);
});

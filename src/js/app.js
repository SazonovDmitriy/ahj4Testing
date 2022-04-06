import isValidInn from '../js/validators';
import widget from '../js/widget';

const form = document.querySelector('[data-widget="innogrn-form-widget"]');
const input = form.querySelector('[data-id="innogrn-input"]');
const formBtn = form.querySelector('[data-id="innogrn-submit"]');
const message = document.querySelector('.message');
const allCards = document.querySelectorAll('.card');

formBtn.addEventListener('click', (e)=> {
    e.preventDefault();

    [...allCards].forEach((item) => {
        if (item.classList.contains('card-active')) {
            item.classList.remove('card-active');
        }
    })

const isValid = isValidInn(input.value);

if (isValid) {
    message.classList.add('hidden');
    input.classList.remove('invalid');
    input.classList.add('valid');
    const cardName = widget(input.value);
    const cardImg = document.querySelector(cardName);

    if (!cardImg) {
        message.classList.remove('hidden');
    } else {
        cardImg.classList.add('card-active');
        form.reset();
    }
} else {
    message.classList.remove('hidden');
    input.classList.remove('valid');
    input.classList.add('invalid');
    }
});

// // TODO: write code here
// function checkLuhn(string purportedCC) {
//     let nDigits = length(purportedCC);
//     let sum = integer(purportedCC[nDigits-1]);
//     let parity = (nDigits-2) modulus 2;
//     for (i = 0 of nDigits - 2) {
//         let digit = integer(purportedCC[i])
//         if (i[2] === parity) {
//             digit = digit * 2;
//         }
//         if (digit > 9) {
//             digit = digit - 9;
//         }
//         sum = sum + digit;
//     }
//     return sum = 0;
// }
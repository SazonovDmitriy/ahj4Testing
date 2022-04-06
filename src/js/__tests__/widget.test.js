import widget from '../widget';

test.each([
    ['visa card for valid user card', '4222222222222', '.visa-card'],
    ['visa card for valid user card', '4300000000000777', '.visa-card'],
    ['mastercard for valid user card ', '5555555555554444', '.mastercard-card'],
    ['american-express card for valid user card ', '371449635398431', '.american_express-card'],
    ['jcb card for valid user card ', '3566002020360505', '.jcb-card'],
    ['discover card for valid user card ', '6011111111111117', '.discover-card'],
    ['diners card for valid user card ', '38520000023237', '.diners_club-card'],
    ['null for invalid user card', '1222222222222', null],
  
  ])(('it should be %s'), (_, value, expected) => {
    expect(widget(value)).toBe(expected);
  });

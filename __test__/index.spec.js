
const {fizzBuzzLogic }= require('../index');

describe('fizzBuzzLogic', () => {
    it('returns "3 Fizz" for multiples of 3', () => {
        expect(fizzBuzzLogic(3)).toBe('3 Fizz');
        expect(fizzBuzzLogic(6)).toBe('6 Fizz');
    });

    it('returns "5 Buzz" for multiples of 5', () => {
        expect(fizzBuzzLogic(5)).toBe('5 Buzz');
        expect(fizzBuzzLogic(10)).toBe('10 Buzz');
    });

    it('returns "15 FizzBuzz" for multiples of both 3 and 5', () => {
        expect(fizzBuzzLogic(15)).toBe('15 FizzBuzz');
        expect(fizzBuzzLogic(30)).toBe('30 FizzBuzz');
    });

    it('returns the number itself when not a multiple of 3 or 5', () => {
        expect(fizzBuzzLogic(1)).toBe('1');
        expect(fizzBuzzLogic(2)).toBe('2');
    });
});

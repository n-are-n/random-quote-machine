/**
 * @jest-environment jest-environment-jsdom
 */
import { generateRandomNumber } from '../assets/js/index'
test('generate random number', () => expect(typeof generateRandomNumber(5)).toBe('number'))

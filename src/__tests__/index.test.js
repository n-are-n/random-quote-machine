/**
 * @jest-environment jest-environment-jsdom
 */
import { generateRandomNumber } from "../assets/js/index"
test('generate random number', () => expect(generateRandomNumber(5)).toBe(typeof Number))
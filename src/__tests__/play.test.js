/**
 * @jest-environment node
 */
import Add from '../assets/js/play'
test('add 2 numbers', () => {
  expect(Add(1, 2)).toBe(3)
})

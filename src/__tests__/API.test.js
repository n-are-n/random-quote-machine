/**
 * @jest-environment node
 */
import GET from './../assets/js/API'
beforeEach(() => {
  jest.mock('node-fetch')
})
test('API should return json data', () => {
  jest.spyOn(global, 'fetch').mockResolvedValueOnce({
    json: jest.fn().mockResolvedValueOnce({ quotes: [] })
  })
  return GET().then(data => expect(data).toHaveProperty('quotes'))
})
test('API should handle errors', async () => {
  jest.spyOn(console, 'error').mockImplementation(() => {})
  jest.spyOn(global, 'fetch').mockRejectedValueOnce(new Error('Network error'))
  await expect(GET()).resolves.toBeUndefined()
  expect(console.error).toHaveBeenCalled()
})

function Add (...args) {
  let sum = 0
  args.forEach(num => {
    sum += num
  })
  return sum
}

export default Add

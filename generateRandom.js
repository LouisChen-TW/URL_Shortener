function generateRandom() {
  const number = '1234567890'
  const lowercase = 'abcdefghijklmnopqrstuvwxyz'
  const uppercase = lowercase.toUpperCase()
  const pollArr = (number + lowercase + uppercase).split('')
  let randomIndex = ''

  for (let i = 0; i < 5; i++) {
    randomIndex += pollArr[Math.floor(Math.random() * pollArr.length)]
  }

  const result = {
    randomIndex: randomIndex,
    shortenUrl: `http://localhost:3000/${randomIndex}`,
  }
  return result
}
module.exports = generateRandom

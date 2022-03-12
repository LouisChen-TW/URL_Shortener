const db = require('../../config/mongoose')
const Url = require('../url_shorter')

db.once('open', () => {
  Url.create({
    originUrl: 'https://www.youtube.com/',
    randomIndex: '12345',
    shortenUrl: 'http://localhost:3000/12345',
  })
    .then(() => {
      console.log('done.')
      db.close()
    })
    .catch((error) => console.log(error))
    .finally(() => process.exit())
})

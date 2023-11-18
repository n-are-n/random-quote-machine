const path = require('path')
const mode = 'development'
const filename = 'index.js'
const entry = path.resolve( __dirname.concat('/src/assets/js/').concat(filename))
module.exports = {
    mode,
    entry,
    output: {
        filename,
        path: path.resolve(__dirname.concat('/src/dist/js/'))
    }
}
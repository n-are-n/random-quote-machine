// const path = require('path')
const mode = 'development'
const filename = 'index.js'
const entry = path.resolve( __dirname, './src/assets/js/', filename)
module.exports = {
    mode,
    entry,
    output: {
        filename,
        path: path.resolve( __dirname, './src/dist/js/')
    }
}
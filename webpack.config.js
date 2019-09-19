const path = require('path');

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname,'dist/js'),
        filename: 'bundle.js'
    }
    //para webpack config
    //mode: 'development' o mode: production
    //para el archivo npm  package.json
    //"dev": "webpack --mode development",
    //"build": "webpack --mode production"
}
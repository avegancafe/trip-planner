var express = require('express')
var path = require('path')
var webpack = require('webpack')
var config = require('./webpack.config')

var app = express()
var compiler = webpack(config)

app.use(
  require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
    noInfo: true
  })
)

app.use(require('webpack-hot-middleware')(compiler))

app.use(express.static(path.resolve(__dirname, 'public')))

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.listen(3000, function(err) {
  if (err) {
    return console.log(err)
  }

  console.log('Server running on port: 3000')
})

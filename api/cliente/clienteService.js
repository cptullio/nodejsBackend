const Cliente = require('./cliente')
Cliente.methods(['get', 'post', 'put', 'delete'])

Cliente.route('qtde', function (req, res, next) {
  Cliente.count(function (error, value) {
  if (error) {
  res.status(500).json({errors: [error]})
  }else {
  res.json({value})
  }
  });
})



module.exports = Cliente
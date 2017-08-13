const express = require('express')
const auth = require('./auth')
module.exports = function(server) {
  
  
  const openApi = express.Router()
  server.use('/oapi', openApi)
  const AuthService = require('../api/user/autenticationService')
  openApi.post('/login', AuthService.login)
  openApi.post('/signup', AuthService.signup)
  openApi.post('/validateToken', AuthService.validateToken)
  
  /*
  * Rotas protegidas por Token JWT
  */
  const protectedApi = express.Router()
  server.use('/api', protectedApi)
  protectedApi.use(auth)
  
  const clienteService = require('../api/cliente/clienteService')
  
  
  
  clienteService.register(protectedApi, '/cliente')
}
const createUser = require('./mock-helper/user')

module.exports = () => ({
  user: createUser()
})

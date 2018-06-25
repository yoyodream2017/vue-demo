const faker = require('faker')
const _ = require('lodash')

module.exports = () => ({
  id: _.uniqueId(),
  avatar: faker.image.avatar(),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  gender: faker.random.objectElement(['male', 'female']),
  age: faker.random.number({ 'min': 1, 'max': 100 })
})

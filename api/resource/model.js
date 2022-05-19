// build your `Resource` model here
const db = require('../../data/dbConfig')

const getAll = () => {
    return db('resources')
}

const getById = (resource_id) => {
    // DO YOUR MAGIC
    return db('resources').where('resource_id', resource_id).first()
  }

const create = (resource) => {
  // DO YOUR MAGIC
  return db('resources').insert(resource)
  .then(([id])=> {
    return getById(id)
  })
}
module.exports = {
    getAll,
    getById,
    create
}
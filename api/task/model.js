// build your `Task` model here
const db = require('../../data/dbConfig')

const getAll = () => {
    return db('tasks')
}

const getById = (task_id) => {
    // DO YOUR MAGIC
    return db('tasks').where('task_id', task_id).first()
  }

const create = (task) => {
  // DO YOUR MAGIC
  return db('tasks').insert(task)
  .then(([id])=> {
    return getById(id)
  })
}
module.exports = {
    getAll,
    getById,
    create
}
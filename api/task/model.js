// build your `Task` model here
const db = require('../../data/dbConfig')

async function getAll() {
    const tasks = await db('tasks as t')
        .leftJoin('projects as p', 't.project_id', 'p.project_id')
        .select('t.task_id', 't.task_description', 't.task_notes', 't.task_completed', 'p.project_name', 'p.project_description')
    return tasks.map(task => 
        task.task_completed === 0?
        {...task, task_completed: false} 
        : {...task, task_completed: true})
}


async function create(task) {
  // must insert task so it exists first then get the task we just created so can return a value with the condition
  const insertTask = await db('tasks').insert(task);
  const newTask = await db('tasks').where('task_id', insertTask).first()
  
  return newTask.task_completed === 0 ? 
    {...newTask, task_completed: false} : 
    {...newTask, task_completed: true};   
      
 }
  

module.exports = {
    getAll,
    create
}


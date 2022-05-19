// build your `Project` model here
const db = require('../../data/dbConfig')

async function getAll () {
    const projects = await db('projects');
    return projects.map(project => 
        project.project_completed === 0?
        {...project, project_completed: false} 
        : {...project, project_completed: true})
}


const create = (project) => {
  // DO YOUR MAGIC
  return db('projects').insert(
      project.project_completed === 0?
      {...project, project_completed: false} 
      : {...project, project_completed: true} )
  
}
module.exports = {
    getAll,
    create
}
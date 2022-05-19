// build your `Project` model here
const db = require('../../data/dbConfig')

async function getAll () {
    const projects = await db('projects');
    return projects.map(project => 
        project.project_completed === 0?
        {...project, project_completed: false} 
        : {...project, project_completed: true})
}


async function create (project) {
  // must insert project so it exists first then get the project we just created so can return a value with the condition
  const insertProject = await db('projects').insert(project)
  const newProject = await db('projects').where('project_id', insertProject).first()
  
  return newProject.project_completed === 0?
    {...newProject, project_completed: false} 
    : {...newProject, project_completed: true}
 }


module.exports = {
    getAll,
    create
}
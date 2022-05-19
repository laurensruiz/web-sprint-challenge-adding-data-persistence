const projects = [
    {project_name:"Competition",project_description:null,project_completed:false},
    {project_name:"App",project_description:null,project_completed:false},
]

const resources = [
    {resource_name: "Book",resource_description:null},
    {resource_name: "Pen",resource_description:null},
]

const tasks = [
    {task_description:"Read",task_notes:null, task_completed:false, project_id: 1},
    {task_description:"Write",task_notes:null, task_completed:false, project_id: 1},
]

const project_resources = [
    {name: 'Lauren', project_id: 1, resource_id:1},
    {name: 'Hillary', project_id: 1, resource_id:1}
]

exports.seed = async function(knex) {
    await knex('projects').insert(projects)
    await knex('resources').insert(resources)
    await knex('tasks').insert(tasks)
    await knex('project_resources').insert(project_resources)
    
}
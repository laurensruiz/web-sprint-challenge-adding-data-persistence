// build your server here and require it from index.js
const express = require('express');

const ProjectsRouter = require('./project/router');
const ResourceRouter = require('./resource/router');
const TaskRouter = require('./task/router')

const server = express();

server.use(express.json());


server.use('/api/projects', ProjectsRouter);
server.use('/api/resources', ResourceRouter);
server.use('/api/tasks', TaskRouter);



module.exports = server;
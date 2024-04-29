const db = require('../config/connection');
const { User, Project, Tech } = require('../models');
const cleanDB = require('./cleanDB');

const techData = require('./techData.json');
const userData = require('./userData.json');
const projectData = require('./projects.json')
db.once('open', async () => {
  await cleanDB('User', 'users');

  await User.insertMany(userData);

  await cleanDB("Tech", "teches")
 const techArray = await Tech.insertMany(techData);

 const updatedUser = await User.findOneAndUpdate({username: "CoreyQ"}, {$addToSet: {techStack: techArray }}, {new: true})

  await cleanDB("Project", "projects")
  const projectArray = await Project.insertMany(projectData);
 
  const updatedUser2 = await User.findOneAndUpdate({username: "CoreyQ"}, {$addToSet: {projects: projectArray }}, {new: true})
  console.log(updatedUser2)
  process.exit(0);
});

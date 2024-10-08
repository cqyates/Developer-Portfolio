const db = require('../config/connection');
const { User, Project, Tech, Recommendation } = require('../models');
const cleanDB = require('./cleanDB');

const techData = require('./techData.json');
const userData = require('./userData.json');
const projectData = require('./projects.json')
const recommendationsData = require("./recommendations.json")
db.once('open', async () => {
  // await cleanDB('User', 'users');

  // await User.insertMany(userData);

//   await cleanDB("Tech", "teches")
//  const techArray = await Tech.insertMany(techData);

//   await User.findOneAndUpdate({username: "CoreyQ"}, {$addToSet: {techStack: techArray }}, {new: true})

  await cleanDB("Project", "projects")
  const projectArray = await Project.insertMany(projectData);
 
  await User.findOneAndUpdate({username: "CoreyQ"}, {$addToSet: {projects: projectArray }}, {new: true})

  // const updatedUser3 = await User.findOneAndUpdate({username: "CoreyQ"}, {$addToSet: {recommendations: [recommendationsData] }}, {new: true})

  process.exit(0);
});

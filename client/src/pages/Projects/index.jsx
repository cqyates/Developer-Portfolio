import {useState} from "react"
import {useQuery} from "@apollo/client"
import {QUERY_USER} from "../../utils/queries"
const ProjectPage = () => {
  const {loading, data} = useQuery(QUERY_USER)
  const userData = data?.user || {}
  const projectsArray= userData.projects
  console.log(projectsArray)
  return (
    <div>
      <h1>Project Page Placeholder</h1>
    </div>
  )  
}

export default ProjectPage
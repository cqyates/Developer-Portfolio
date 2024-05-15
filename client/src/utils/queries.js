import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      admin
      projects {
        title
        description
        githubLink
        deployedLink
        imageName
      }
    }
  }
`;
export const QUERY_USER = gql`
  {
    user {
      _id
      username
      email
      techStack {
        name
      }
      projects {
        title
        description
        githubLink
        deployedLink
        imageName
        tech {
          name
        }
      }
    }
  }
`;

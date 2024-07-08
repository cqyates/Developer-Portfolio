import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      admin
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
      messages {
        messageId
        contactName
        contactEmail
        message
        submitted
        received
        read
        responded
        jobLead
        studentLead
        consultingLead
        dateReceived
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
      admin
      projects {
        _id
        title
        description
        githubLink
        deployedLink
        imageName
      }
      messages {
        messageId
        contactName
        contactEmail
        message
        submitted
        received
        read
        responded
        jobLead
        studentLead
        consultingLead
      }
      recommendations {
        _id
        recommendationId
        relationship
        firstName
        lastName
        currentRole
        currentCompany
        recommendationText
        github
        featuredProject
        website
        approved
      }
    }
  }
`;

import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const SEND_MESSAGE = gql`
mutation sendMessage($messageData: MessageInput!) {
  sendMessage(messageData: $messageData) {
    messages {
      consultingLead
      contactEmail
      contactName
      jobLead
      message
      messageId
      read
      received
      responded
      studentLead
      submitted
    }
    username
  }
}
`

export const SEND_RECOMMENDATION = gql`
mutation sendRecommendation($recommendationData: RecommendationInput!) {
  sendRecommendation(recommendationData: $recommendationData) {
    recommendations {
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
`
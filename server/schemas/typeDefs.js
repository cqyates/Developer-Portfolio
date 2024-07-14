const typeDefs = `
  type User {
    _id: ID!
    username: String!
    email: String!
    admin: Boolean
    techStack: [Tech]
    projects: [Project]
    messages: [Message]
    recommendations: [Recommendation]
  }
  type Message {
    messageId: ID!
    contactName: String!
    contactEmail: String!
    message: String!
    submitted: Boolean
    received: Boolean
    read: Boolean
    responded: Boolean
    jobLead: Boolean
    studentLead: Boolean
    consultingLead: Boolean
  }
  input MessageInput {
    contactName: String!
    contactEmail: String!
    message: String!
    submitted: Boolean
    received: Boolean
    read: Boolean
    responded: Boolean
    jobLead: Boolean
    studentLead: Boolean
    consultingLead: Boolean
  }
  type Recommendation {
    _id: ID!
    recommendationId: String!
    relationship: String!
    firstName: String!
    lastName: String!
    currentRole: String
    currentCompany: String
    recommendationText: String!
    github: String
    featuredProject: String
    website: String
    approved: Boolean
  }
  input RecommendationInput {
    relationship: String!
    firstName: String!
    lastName: String!
    currentRole: String
    currentCompany: String
    recommendationText: String!
    github: String
    featuredProject: String
    website: String
  }
  type Project {
    _id: ID!
    title: String!
    description: String!
    githubLink: String!
    deployedLink: String
    imageName: String
    tech: [Tech]
  }
  type Tech {
    name: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me:User
    user: User
    projects: [Project]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    sendMessage(messageData: MessageInput!): User
    createAccount(email: String!, username: String!, password: String!): Auth
    sendRecommendation(recommendationData: RecommendationInput!): User
    removeRecommendation(_id: ID!): User
  }
`;

module.exports = typeDefs;

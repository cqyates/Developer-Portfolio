const typeDefs = `
  type User {
    _id: ID!
    username: String!
    email: String!
    admin: Boolean
    techStack: [Tech]
    projects: [Project]
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
  }
`;

module.exports = typeDefs;

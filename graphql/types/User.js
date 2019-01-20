export default `
  type User {
    _id: ID
    name: String!
    email: String!
  }
  type Query {
    user(_id: ID, name: String): User
    users: [User]
  }
  type Mutation {
    addUser( name: String!, email: String!): User
    editUser(_id: ID!, name: String, email: String): User
    deleteUser(_id: ID!, name: String, email: String): User
  }
`;
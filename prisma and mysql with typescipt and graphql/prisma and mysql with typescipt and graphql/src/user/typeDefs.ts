export const typeDefs = `#graphql
type User {
  id: ID!
  firstName: String!
  lastName: String!
  email: String!
  salaries: [Salary!]! 
}
type Salary {
  id: ID!
  userId: Int!
  salary: String!
  user: User!
}
type Query {
  users: [User!]!

}
input CreateUserInput {
  firstName: String!
  lastName: String!
  email: String!
}

input CreateSalaryInput {
  userId: Int!
  salary: String!
}

`
export default typeDefs
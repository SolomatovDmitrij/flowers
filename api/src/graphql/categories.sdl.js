export const schema = gql`
  type Category {
    id: Int!
    name: String!
  }

  type Query {
    categories: [Category!]!
    category(id: Int!): Category!
  }

  input CreateCategoryInput {
    name: String!
  }

  input UpdateCategoryInput {
    name: String
  }

  type Mutation {
    createCategory(input: CreateCategoryInput!): Category!
    updateCategory(id: Int!, input: UpdateCategoryInput!): Category!
    deleteCategory(id: Int!): Category!
  }
`

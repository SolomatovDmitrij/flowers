export const schema = gql`
  type Item {
    id: Int!
    name: String!
    category: Category!
    categoryId: Int!
    createAt: DateTime!
  }

  type Query {
    items: [Item!]!
    item(id: Int!): Item!
  }

  input CreateItemInput {
    name: String!
    categoryId: Int!
  }

  input UpdateItemInput {
    name: String
    categoryId: Int
  }

  type Mutation {
    createItem(input: CreateItemInput!): Item!
    updateItem(id: Int!, input: UpdateItemInput!): Item!
    deleteItem(id: Int!): Item!
  }
`

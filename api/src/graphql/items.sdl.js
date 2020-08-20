export const schema = gql`
  type Item {
    id: Int!
    name: String!
    category: Category!
    categoryId: Int!
    images: [Image]
    description: String
    size_w: Int
    size_h: Int
    price: Int
    createAt: DateTime!
  }

  type Query {
    items: [Item!]!
    item(id: Int!): Item!
    items_by_category(categoryId: Int!): [Item!]!
  }

  input CreateItemInput {
    name: String!
    categoryId: Int!
    description: String
    size_h: Int
    size_w: Int
    price: Int
  }

  input UpdateItemInput {
    name: String
    categoryId: Int
    description: String
    size_h: Int
    size_w: Int
    price: Int
  }

  type Mutation {
    createItem(input: CreateItemInput!): Item!
    updateItem(id: Int!, input: UpdateItemInput!): Item!
    deleteItem(id: Int!): Item!
  }
`

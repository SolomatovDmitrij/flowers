export const schema = gql`
  type Image {
    id: Int!
    title: String!
    url: String!
    item: Item
    itemId: Int
  }

  type Query {
    images: [Image!]!
    imageItems(itemId: Int!): [Image!]!
    image(id: Int!): Image!
  }

  input CreateImageInput {
    title: String!
    url: String!
  }

  input UpdateImageInput {
    title: String
    url: String
    itemId: Int
  }

  type Mutation {
    createImage(input: CreateImageInput!): Image!
    updateImage(id: Int!, input: UpdateImageInput!): Image!
    deleteImage(id: Int!): Image!
  }
`

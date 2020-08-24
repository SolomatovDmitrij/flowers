export const schema = gql`
  type Image {
    id: Int!
    url: String!
    item: Item
    itemId: Int
  }

  type Query {
    images: [Image!]!
    imageItems(itemId: Int!): [Image!]!
    imageEmptyItems: [Image!]!
    image(id: Int!): Image!
  }

  input CreateImageInput {
    url: String!
  }

  input UpdateImageInput {
    url: String
    itemId: Int
  }

  type Mutation {
    createImage(input: CreateImageInput!): Image!
    updateImage(id: Int!, input: UpdateImageInput!): Image!
    deleteImage(id: Int!): Image!
  }
`

import { ApolloServer } from 'apollo-server'


// 1
const typeDefs = `
  type Query {
    info: String!
    visits: String!
  }
`

// 2
const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone App`,
  }
}

// 3
const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server
  .listen({port: 8000})
  .then(({ url }) =>
    console.log(`Server is running on ${url}`)
  );
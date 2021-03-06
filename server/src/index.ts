import 'module-alias/register';
import { ApolloServer, makeExecutableSchema } from 'apollo-server-express'
import express from 'express'
import fs from 'fs'
import path from 'path'
import { PrismaClient } from 'unwind-server/prisma/src/generated/client'
import { Mutation, Query, Post, Cruise, Comment, Challenge, User } from 'unwind-server/resolvers'
import { dateScalar, intString } from './utils/scalars';
import Plugin from 'unwind-server/plugins'


const prisma = new PrismaClient()
const app = express()

// app.use(checkAuth)

// 2
const resolvers = {
  Date: dateScalar,
  IntString: intString,
  Query,
  Mutation,
  Post,
  Cruise,
  Comment,
  Challenge,
  User
}

// 3

const schema = makeExecutableSchema({
  typeDefs: fs.readFileSync(
    path.join(__dirname, 'schema/schema.graphql'),
    'utf8'
  ),
  resolvers,
  resolverValidationOptions: { requireResolversForResolveType: false },
})

const server = new ApolloServer({
  schema,
  context: async ({ req, res }) => {
    return {
      ...req,
      prisma
    }
  },
  formatError: (err) => {
    // Don't give the specific errors to the client.
    if (err.message.startsWith("Database Error: ")) {
      return new Error('Internal server error');
    }
    if(err.message.startsWith('Timezone')) {
      return new Error('Client timezone is missing from request headers')
    }
    // Otherwise return the original error.  The error can also
    // be manipulated in other ways, so long as it's returned.
    return err;
  },
  plugins: [
    Plugin as any
  ]
})

server.applyMiddleware({ app })

app.listen({ port: 8000 }, () => {
    console.log(`Server is running on ${server.graphqlPath}`)
})
 
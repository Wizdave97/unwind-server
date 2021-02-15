import 'module-alias/register';
import { ApolloServer, makeExecutableSchema } from 'apollo-server'
import fs from 'fs'
import path from 'path'
import { verifyToken } from 'unwind-server/auth'
import { PrismaClient } from 'unwind-server/prisma/src/generated/client'
import { Mutation, Query, Post, Cruise, Comment, Challenge, User } from 'unwind-server/resolvers'
import { dateScalar } from './utils/scalars';


const prisma = new PrismaClient()


// 2
const resolvers = {
  Date: dateScalar,
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
  context: async ({ req }) => {
    const token = req.headers.authorization || ''
    const decodedToken = await verifyToken(token)
    return {
      ...req,
      prisma,
      decodedToken
    }
  },
  formatError: (err) => {
    // Don't give the specific errors to the client.
    if (err.message.startsWith("Database Error: ")) {
      return new Error('Internal server error');
    }
    // Otherwise return the original error.  The error can also
    // be manipulated in other ways, so long as it's returned.
    return err;
  },
})

server
  .listen({ port: 8000 })
  .then(({ url }) =>
    console.log(`Server is running on ${url}`)
  );
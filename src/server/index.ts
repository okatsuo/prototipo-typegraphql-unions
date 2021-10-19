import "reflect-metadata";
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import { customAuthChecker } from '../utils/authorization';
import { UserResolver } from '../resolver/user.resolver';

const start = async () => {
  const port = process.env.PORT || 7000
  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver],
      authChecker: customAuthChecker
    }),
    context: ({ req }) => {
      const context = { header: req.headers }
      return context
    }
  })

  server.listen(port, () => {
    console.log(`server running at http://localhost:${port}`)
  })
}

start()
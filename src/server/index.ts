import "reflect-metadata";
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import { UserResolver } from '../resolver/UserResolver';

const start = async () => {
  const port = process.env.PORT || 7000
  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver]
    })
  })

  server.listen(port, () => {
    console.log(`server running at http://localhost:${port}`)
  })
}

start()
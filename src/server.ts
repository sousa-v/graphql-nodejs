import "reflect-metadata";

import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { resolve } from "node:path";

import { AppoitmentsResolver } from "./resolvers/appointments-resolver";

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [AppoitmentsResolver],
    emitSchemaFile: resolve(__dirname, "schema.gql"),
  });

  const server = new ApolloServer({
    schema
  });

  const { url } = await server.listen();

  console.log(`HTTP server running on ${url}`);
}

bootstrap();

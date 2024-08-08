import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { db } from "./db";
import { typeDefs } from "./schema";

const resolvers = {
  Query: {
    games() {
      return db.games;
    },
    authors() {
      return db.authors;
    },
    reviews() {
      return db.reviews;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const bootstrap = async () => {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 80 },
  });

  console.log(`Server is running on port ${url}`);
};

bootstrap();

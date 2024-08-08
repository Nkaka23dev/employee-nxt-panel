"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@apollo/server");
const standalone_1 = require("@apollo/server/standalone");
const db_1 = require("./db");
const schema_1 = require("./schema");
const resolvers = {
    Query: {
        games() {
            return db_1.db.games;
        },
        authors() {
            return db_1.db.authors;
        },
        reviews() {
            return db_1.db.reviews;
        },
    },
};
const server = new server_1.ApolloServer({
    typeDefs: schema_1.typeDefs,
    resolvers,
});
const bootstrap = async () => {
    const { url } = await (0, standalone_1.startStandaloneServer)(server, {
        listen: { port: 80 },
    });
    console.log(`Server is running on port ${url}`);
};
bootstrap();

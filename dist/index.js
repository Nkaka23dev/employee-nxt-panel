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
        game(_, args) {
            return db_1.db.games.find((game) => game.id === args.id);
        },
        authors() {
            return db_1.db.authors;
        },
        author(_, args) {
            return db_1.db.authors.find((author) => author.id === args.id);
        },
        review(_, args) {
            return db_1.db.reviews.find((review) => review.id === args.id);
        },
        reviews() {
            return db_1.db.reviews;
        },
    },
    Game: {
        reviews(parent) {
            return db_1.db.reviews.filter((review) => review.game_id === parent.id);
        },
    },
    Author: {
        reviews(parent) {
            return db_1.db.reviews.filter((review) => review.author_id === parent.id);
        },
    },
    Review: {
        author(parent) {
            return db_1.db.authors.find((author) => author.id === parent.author_id);
        },
        game(parent) {
            return db_1.db.games.find((game) => game.id === parent.game_id);
        },
    },
    Mutation: {
        deleteGame(_, args) {
            return db_1.db.games.filter((game) => game.id !== args.id);
        },
        addGame(_, args) {
            let game = {
                ...args.game,
                id: Math.floor(Math.random() * 1000).toString(),
            };
            db_1.db.games.push(game);
            return game;
        },
        updateGame(_, args) {
            db_1.db.games = db_1.db.games.map((game) => {
                if (game.id === args.id) {
                    return { ...game, ...args.game };
                }
                return game;
            });
            return db_1.db.games.find((game) => game.id === args.id);
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

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
exports.typeDefs = `#graphql
    type Game {
        id: ID!,
        title: String!,
        platform:[String!]!
        reviews: [Review!]
    }
    type Review {
        id: ID!,
        rating: Int!,
        content: String!
        game: Game!
        author: Author!
    }
    type Author {
        id: ID!
        name: String!
        verified: Boolean!
        reviews: [Review!]
    }
    type Query {
        reviews: [Review],
        review(id: ID!): Review
        games: [Game],
        game(id: ID): Game,
        authors: [Author], 
        author(id: ID): Author
    }

    type Mutation {
        deleteGame(id: ID!):[Game]
        addGame(game: GameData): Game
        updateGame(id:ID!, game:UpdateGameData!): Game
    }
    input GameData {
        title: String!
        platform: [String!]!
    }
    input UpdateGameData {
        title: String
        platform: [String!]
    }
`;

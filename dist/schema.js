"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
exports.typeDefs = `#graphql
    type Game {
        id: ID!,
        title: String!,
        platform:[String!]!
    }
    type Review {
        id: ID!,
        rating: Int!,
        content: String!
    }
    type Author {
        id: ID!
        name: String!
        verified: Boolean!
    }
    type Query {
        reviews: [Review],
        games: [Game],
        authors: [Author]
    }
`;

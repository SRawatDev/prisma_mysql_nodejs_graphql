import express from "express";
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import {user} from "./user/index"
const port: number = 4000;
async function graphqlServer() {
    const app = express();
    app.use(express.json());
    const typeDefs = `
      ${user.typeDefs}
        type Query {
            ${user.queries}
        }
        type Mutation {
            ${user.mutation}
        }
    `;
    const resolvers = {
        Query: {
            ...user.resolver.queries
        },
        Mutation: {
            ...user.resolver.mutations
        }
    };
    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });
    await server.start();
    app.use(
        '/graphql',
        expressMiddleware(server),
    );

    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}

graphqlServer();

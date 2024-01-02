/*
Type Of Vulnerability : Denial of Service (DoS) through Nested GraphQL Queries
CWE : CWE-400
*/

import express from 'express';
import expressGraphQL from 'express-graphql';
import { buildSchema } from 'graphql';

const app = express();
const PORT = 3000;

// Vulnerable GraphQL schema
const vulnerableSchema = buildSchema(`
    type Query {
        user(id: ID!): User
    }

    type User {
        id: ID!
        name: String!
    }
`);

const usersDatabase = [
    { id: '1', name: 'Alice' },
    { id: '2', name: 'Bob' },
    // ... more users
];

const root = {
    user: ({ id }: { id: string }) => {
        const user = usersDatabase.find(user => user.id === id);
        return user;
    }
};

app.use('/graphql', expressGraphQL({    //Source and Sink
    schema: vulnerableSchema,
    rootValue: root,
    graphiql: true, // Enable GraphQL interactive query editor
}));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

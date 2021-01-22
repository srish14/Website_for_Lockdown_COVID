const {ApolloServer, PubSub} = require('apollo-server');
// const gql = require('graphql-tag'); //dependency of apollo server
const mongoose = require('mongoose'); //connecting to database (Object relational mapper for interface with mongodb)

const typeDefs = require('./graphql/typeDefs'); //type definitions
const resolvers = require('./graphql/resolvers');
const { MONGODB } = require('./config.js');

const pubsub = new PubSub();
const server = new ApolloServer({
    typeDefs,
    resolvers, //resposible for returning a result for the field
    context: ({req}) => ({req, pubsub})
});

mongoose
    .connect(MONGODB, { useNewUrlParser: true })
    .then(() => {
        console.log('MongoDB Connected');
        return server.listen({ port: 5000 });
    })

    .then((res) => { //res is result object
        console.log(`Server running at ${res.url}`);
});

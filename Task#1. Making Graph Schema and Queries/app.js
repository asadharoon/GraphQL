// npm install nodemon
// npm install express
// npm install graphql express-graphql
//npm i lodash
const express = require('express');
const graphqlHTTP = require("express-graphql");
const app = express();
const schema = require('./schema/schema');
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true //to test the queries
}));
app.listen(4000, () => {
    console.log("Server started at 4000 port");
});
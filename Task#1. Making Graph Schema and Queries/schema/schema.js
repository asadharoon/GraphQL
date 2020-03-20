const _ = require('lodash');
const graphql = require('graphql');
var books = [
    { name: "ABC", id: '1', genre: "Asad" },
    { name: "CC", id: '2', genre: "Asad" }
]
const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID } = graphql;
const BookType = new GraphQLObjectType({
    name: "Book",
    fields: () => ({
        // id is first string type
        // id: { type: GraphQLString },
        // now id is Numeric type ID.
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString }
    })
});
const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: () => ({
        book: {
            type: BookType,
            // now id is ID type Numeric
            args: { id: { type: GraphQLID } },
            // Similarly id previously is String type
            // args: { id: { type: GraphQLString} },

            resolve(parent, args) {
                //code to get data from db/other sources
                console.log(typeof (args.id))
                return _.find(books, { id: args.id });
                //use lodash to find the books
            }
        }
    })
})
module.exports = new GraphQLSchema({
    query: RootQuery
})
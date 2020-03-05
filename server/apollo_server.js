'use strict';
const {ApolloServer, gql} = require('apollo-server');
const db = {};
// dummy data contetnt loaders...
Object.assign(db, require('./data/cars.json'));
Object.assign(db, require('./data/books.json'));
Object.assign(db, require('./data/authors.json'));
Object.assign(db, require('./data/posts.json'));
//console.log( db);

//Step1: create a schema...
const typeDefs = gql(`
    enum CarTypes{
        Sedan
        SUV
        Coupe
    }
    type Book {
        id: ID!
        name: String!
        authorId: String!
    }
    type Car{
        id: ID!
        brand: String!
        color: String!
        doors: String!
        type: CarTypes!
    }
    type Post{
        id: String!
        userId: String!
        title: String!
        body: String!
    }
    type Mutation {
        insertCar(brand: String!, color: String!, doors: Int!, type: CarTypes!):[Car]!
    }
    type Query{
        hello: String
        greeting(name: String): String
        cars: [Car]
        carsById(id: ID): Car
        carsByType(type: CarTypes!): [Car]
        books: [Book]
        posts: [Post]
    }

`)

//Step2: create a resolvers... 
const resolvers = {
    Query: {
        hello: (parent, args, context, info) => {
            return 'Hello world From ROOT!';
          },
          greeting: (parent, args, context, info) => {
              return 'Hello '+ args.name + " Good Morning Always....";
          },
          cars: () => db.cars,
          carsById: (parent, args, context, info) => {
              return db.cars.filter( car => car.id === args.id )[0]
          },
          carsByType: (parent, args, context, info) => {
              return db.cars.filter( car => car.type === args.type)
          },
          books: () => db.books,
          posts: () => db.posts
    },
    Mutation: {
        insertCar: ({brand, color, doors, type}) => {
            db.cars.push({
                id: Math.random().toString(),
                brand: brand,
                color: color, 
                doors: doors, 
                type: type
            })
            return db.cars;
        }
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers
})
server.listen().then(({url})=>{
    console.log( `Server ready at  ${url}`)
})

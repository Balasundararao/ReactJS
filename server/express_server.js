'use strict';
const express = require("express");
const graphqlHTTP = require( "express-graphql");
const { graphql, buildSchema   }  = require("graphql");

const db = {};
// dummy data contetnt loaders...
Object.assign(db, require('./data/cars.json'));

//Step1: create a schema...
const schema = buildSchema(`
    enum CarTypes{
        Sedan
        SUV
        Coupe
    }
    type Car{
        id: ID!
        brand: String!
        color: String!
        doors: String!
        type: CarTypes!
    }
    type Mutation {
        insertCar(brand: String!, color: String!, doors: Int!, type: CarTypes!):[Car]!
    }
    type Query{
        hello: String
        greeting(name: String): String
        carsById(id: ID): Car
        carsByType(type: CarTypes!): [Car]
    }

`)

//Step2: create a resolvers... 
const resolvers = () => {
    const hello = () => {
        return 'Hello World From Resolvers!....'
    }
    return {hello}
}
  //##### OR ###########
var root = {
    hello: () => {
      return 'Hello world From ROOT!';
    },
    greeting: args => {
        return 'Hello '+ args.name + " Good Morning Always....";
    },
    carsById: args => {
        return db.cars.filter( car => car.id === args.id )[0]
    },
    carsByType: args => {
        return db.cars.filter( car => car.type === args.type)
    },
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
};
//Step3:  execute from local...
const executeQuery = async() => {
    const result = await graphql(schema, '{hello}', resolvers())
    //console.log(result);

    const greet = await graphql(schema, '{greeting(name:"Bala")}', root)
    //console.log( greet.data );

    // ################ QUERY BY TYPE ########################
    const queryByType = `{
        carsByType(type:Coupe) {
            brand
            color
            type
            id
        }
    }
    `
    const responseOne = await graphql(schema, queryByType, root);
    //console.log( responseOne.data);

    // ########################### Query BY ID #################
    const queryById = `{
        carsById(id:"a"){
            brand
            color
            type 
            id
        }
    }`
    const responseTwo = await graphql( schema, queryById, root);
    //console.log( responseTwo.data);

    // ############# Mutation1 ##################################
    const mutation1 = `{
        mutation {
            insertCar(brand: "Nissan", color:"Red", doors:4, type:Coupe) {
              id
              brand
              color
              doors
              type
            }
          }
    }`
    const responseInsert = await graphql(schema, mutation1, root);
    console.log( responseInsert.data );

    //  #################  mutation2 ####################
    const mutaionWithVariables = `mutation insertCar($brand: String!, $color: String!, $doors: Int!, $type: CarTypes!) {
        insertCar(brand: $brand, color: $color, doors:$doors,  type:$type) {
           id
           brand
           color
           doors
           type
        }
    }`
    const insert = await graphql(schema, mutaionWithVariables, root, null, {brand: 'Nissan',
        color: 'Red',
        doors: 4, 
        type: 'SUV'
    });
    console.log( insert.data );
}
executeQuery();

// express server appp...
const app  = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    // rootValue: resolvers(),
    rootValue: root,
    graphiql: true
}));
app.listen(4000);
console.log( 'Running a GraphQL API server at http://localhost:4000/graphql')

/** 
curl -X POST 'http://localhost:4000/graphql' -H 'Content-Type: application/json' --data '{"query":"{hello}"}'
curl -X POST 'http://localhost:4000/graphql' -H 'Content-Type: application/json' --data '{"query":"{greeting(name:\"Bala\")}"}'
mutation {
    insertCar(brand: "Nissan", color:"Red", doors:4, type:Coupe) {
        id
        brand
        color
        doors
        type
    }
}
mutation insertCar($brand: String!, $color: String!, $doors: Int!, $type: CarTypes!) {
           insertCar(brand: $brand, color: $color, doors:$doors,  type:$type) {
              id
              brand
              color
              doors
              type
            }
}
{
  "brand": "Nio",
  "color": "Red",
  "doors": 4,
  "type": "SUV"
}
*/
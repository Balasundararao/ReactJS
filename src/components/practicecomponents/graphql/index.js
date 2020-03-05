import React from 'react';
// Graph QL...
import Cars from './cars';
import ApolloClient from 'apollo-boost';
//import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({ uri: 'http://localhost:4000/graphql' });

const GraphQLMain = () => {
    return(
        <Cars client={client}/>
    )
}

export default GraphQLMain;
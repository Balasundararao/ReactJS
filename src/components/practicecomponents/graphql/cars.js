import React from 'react';
import gql from 'graphql-tag';

const Cars = (props) => {
    props.client.query({
        query: gql`
            {
                hello
            }
        `
    }).then( data => { 
        console.log("Hello its agraphql query");
        console.log( data);
        console.log( "Hello its a graphql query ")
    }
    );
    return(
        <div>Cars Components....</div>
    )
}

export default Cars;
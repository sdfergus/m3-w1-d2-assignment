const app = require( './app' );
const dotenv = require( 'dotenv' ).config();
const mongoose = require( 'mongoose' );

const server = app.listen( 3000, function () {
    console.log( `Express is running on port ${ server.address().port }` );
} );
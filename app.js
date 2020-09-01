const express = require('express')
const app = express()
const {graphqlHTTP} = require('express-graphql')
const schema = require('./Schema/schema')
app.use('/graphql',graphqlHTTP({
    schema:schema,
    graphiql:true
}))

app.listen(5000,() => {
    console.log('PORT STARTED ON PORT 5000');
})
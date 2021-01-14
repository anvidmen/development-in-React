require('dotenv').config()
const { env: { PORT, MONGODB_URL } } = process
const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { ourSchema, resolver } = require('./schema')
const mongoose = require('mongoose')

try {
  console.debug('connecting to database')

  mongoose.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => {
      const app = express()

      app.use('/graphql', graphqlHTTP({
        schema: ourSchema,
        rootValue: resolver,
        graphiql: true
      })
      )

      app.listen(PORT, () => console.log(`Server running and listening to port ${PORT}`))
    })
} catch (error) {
  error(error)
}

const express = require('express')
const config = require("./config.json")
const graphqlHTTP = require('express-graphql')
const schema = require('../schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')
const corsMiddleware = require('../middleware/cors.middleware')

const app = express();
const PORT = process.env.PORT || config.serverPort

app.use(cors())
app.use(corsMiddleware)

const start = async () => {
  try {
    await mongoose.connect(config.dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    app.listen(PORT, () => {
      console.log('Server started on port ', PORT)
    })
  } catch (e) {
    console.log(e)
  }
}

start()
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))



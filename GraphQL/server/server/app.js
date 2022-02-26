const express = require('express')
const config = require("./config.json")
const graphqlHTTP = require('express-graphql')
const schema = require('../schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express();
const PORT = config.serverPort;


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

app.use(cors())
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))



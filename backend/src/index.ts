import consola from 'consola'
import express, { json } from 'express'
import register from './routes';
import mongoose from "mongoose";

const app = express()

const port = process.env.PORT || 3000

// Parse JSON body
app.use(json())

mongoose.connect(
  'mongodb://mongodb:27017/url-shorten',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    // @ts-ignore
    auth: { 'authSource': 'admin', user: 'admin', password: 'secret' }
  },
    err => consola.error
).then(() => {
  app.use('/api', register())

  app.listen(port, () => {
    consola.info(`Server started at http://localhost:${port}`)
  })
})
const db = mongoose.connection
db.on('open', () => consola.info('Connected to mongodb'))
db.on('error', (error) => consola.error(error))

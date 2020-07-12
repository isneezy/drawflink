import consola from 'consola'
import express, { json } from 'express'
import register from './routes';

const app = express()

const port = process.env.PORT || 3000

// // Parse JSON body
app.use(json())

// configure routes
register(app)

app.listen(port, () => {
  consola.info(`Server started at http://localhost:${port}`)
})

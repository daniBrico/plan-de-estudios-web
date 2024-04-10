import express, { json } from 'express'
import { careersRouter } from './src/routes/careers.js'

const app = express()
app.use(json())
app.disable('x-powered-by')

app.use('/careers', careersRouter)
const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})

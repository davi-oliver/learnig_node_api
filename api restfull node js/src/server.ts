import fastify from 'fastify'
import { kenx } from './database'
import { table } from 'console'

const app = fastify()
// GET POST PATCH PUT DELETE

// http://localhost:3000/helo
app.get('/hello', async () => {
  const test = await kenx('sqlite_schema').select('*')
  return test
})

app
  .listen({
    port: 3000,
  })
  .then(() => {
    console.log('Server is running on port 3000')
  })

// ESM
import Fastify from 'fastify'
import usersRoute from './routes/users.routes'
const app = Fastify({ logger: true })

const PORT = process.env.PORT || 8000
const HOST = process.env.HOST

app.get('/', async (request, reply) => {
  return { hello: 'world' }
})

app.register(usersRoute)

const start = async () => {
  try {
    app.listen({ port: Number(PORT), host: HOST})
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}

start()
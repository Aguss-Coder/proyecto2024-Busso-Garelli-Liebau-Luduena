// ESM
import Fastify from 'fastify'
import usersRoute from './routes/users.routes'
import { prisma } from './lib/prisma'
const app = Fastify({ logger: true })

const PORT = process.env.PORT || 8000
const HOST = process.env.HOST

app.register(usersRoute)

const start = async () => {
  try {
    await prisma.$connect()
    app.listen({ port: Number(PORT), host: HOST})
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

start()
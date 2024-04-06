import { FastifyInstance } from 'fastify';

export default async function usersRoute(fastify: FastifyInstance): Promise<void> {
  fastify.get('/users', async (request, reply) => {  
    try {
      return reply.status(200).send({ ip: request.ip })
    }catch(err) {
      fastify.log.error(err)
      return reply.status(500).send({ error: (err as Error).message })
    }
  })
}
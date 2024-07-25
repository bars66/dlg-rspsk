import Fastify, {FastifyRequest} from 'fastify';
import {createDlgRaspiska} from './raspiska';

const fastify = Fastify({
  logger: true
})

fastify.get('/generate-raspiska', async function handler (request: FastifyRequest<{
  Querystring: {id?: string, gr?: string, reason?: string, date?: string}}
>, reply) {
  reply.type('image/png')
  return await createDlgRaspiska(
      request.query.id || 'no-num',
      request.query.gr || '',
      request.query.reason || '',
      request.query.date || 'no-date'
  )
})

fastify.listen({ host: '0.0.0.0', port: 3000 }).catch(err => console.log('global error', err))

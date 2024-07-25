const Fastify = require('fastify');
const fastify = Fastify({
  logger: true
})
const raspiskaCreator = require('./raspiska');

fastify.get('/generate-raspiska', async function handler (request, reply) {
  reply.type('image/png')
  return await raspiskaCreator.createDlgRaspiska(request.query.id, request.query.gr, request.query.reason, request.query.date)
})

fastify.listen({ host: '0.0.0.0', port: 3000 }).catch(err => console.log('global error', err))
import fastify from 'fastify';
import cors from '@fastify/cors';
import { memoriesRoutes } from './routes/memories';

const app = fastify();

app.register(cors, {
  origin: true,
  /* origin: ['http://localhost:3000', 'http:recketseat.com.br //'] */
});
app.register(memoriesRoutes);

app
  .listen({
    port: 3001,
  })
  .then(() => {
    console.log('HTTP server running on http://localhost:3001');
  });

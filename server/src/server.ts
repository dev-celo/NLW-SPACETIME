import fastify from 'fastify';
import cors from '@fastify/cors';
import 'dotenv/config';
import jwt from '@fastify/jwt';
import { memoriesRoutes } from './routes/memories';
import { authRoutes } from './routes/auth';

const app = fastify();

app.register(cors, {
  origin: true,
  /* origin: ['http://localhost:3000', 'http:recketseat.com.br //'] */
});

app.register(jwt, {
  secret: 'spacetime',
  /* origin: ['http://localhost:3000', 'http:recketseat.com.br //'] */
});

app.register(memoriesRoutes);

app.register(authRoutes);

app
  .listen({
    port: 3001,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log('HTTP server running on http://localhost:3001');
  });

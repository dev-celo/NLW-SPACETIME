import { FastifyInstance } from 'fastify';
import axios from 'axios';
import { z } from 'zod';
import { prisma } from '../lib/prisma';

export async function authRoutes(app:FastifyInstance) {
  app.post('/register', async (req) => {
    const bodySchema = z.object({
      code: z.string(),
    });

    const { code } = bodySchema.parse(req.body);

    const accessTokenResponse = await axios.post(
    'https://github.com/login/oauth/access_token',
    null,
    {
      params: {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      },
      headers: {
        Accept: 'application/json',
      },
    },
    );

    const { access_token } = accessTokenResponse.data;

    const userResponse = await axios.get('https://api.github.com/user', {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    });

    const userSchema = z.object({
    id: z.number(),
    login: z.string(),
    name: z.string(),
    avatar_url: z.string().url(),
    });

    const userInfo = userSchema.parse(userResponse.data);

    let user = await prisma.user.findUnique({
    where: {
      githubId: userInfo.id,
    },
    });

    if (!user) {
    user = await prisma.user.create({
      data: {
        githubId: userInfo.id,
        name: userInfo.name,
        login: userInfo.login,
        avataUrl: userInfo.avatar_url,
      },
    });
    }

    const token = app.jwt.sign(
      {
        name: user.name,
        avatarUrl: user.avataUrl,
      },
      {
        sub: user.id,
        expiresIn: '8 days',
      },
    );

     return {
      token,
     };
  });
}
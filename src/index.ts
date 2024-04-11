import { Elysia } from 'elysia';
import './config/database';
import { swagger } from '@elysiajs/swagger';
// import { logger } from '@grotto/logysia';
import UserRoutes from './routes/userRoutes';
const PORT = process.env.PORT || 3000;

const app = new Elysia();

// app.use(logger());

app.use(
  swagger({
    path: '/v1/swagger',
    documentation: {
      info: {
        title: 'bun.js CRUD using elysia.js & MongoDB',
        version: '1.0.0',
      },
    },
  })
);

app.get('/', () => {
  return 'HI MOM!';
});

app.use(UserRoutes);

app.listen(PORT, () => {
  console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
  );
});

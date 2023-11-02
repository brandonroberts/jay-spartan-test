import { defineEventHandler } from 'h3';

export default defineEventHandler((event) => ({
  message: 'Hello World',
  database: event.context.cloudflare.env.DATABASE_URL,
}));

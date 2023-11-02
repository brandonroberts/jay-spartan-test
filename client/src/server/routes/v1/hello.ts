import { defineEventHandler } from 'h3';

export default defineEventHandler((event) => {
  console.log(event.context);
  return {
    message: 'Hello World',
    database: event.context.cloudflare?.env.DATABASE_URL || 'not set',
  };
});

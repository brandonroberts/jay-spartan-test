import { defineEventHandler } from 'h3';

export default defineEventHandler((event) => {
  console.log('cloudflare', event.context.cloudflare);
  console.log('pe', process.env);

  return {
    message: 'Hello World',
    database: event.context.cloudflare?.env.DATABASE_URL || 'not set',
  };
});

import { defineEventHandler } from 'h3';

export default defineEventHandler((event) => {
  console.log('cloudflare', event.context.cloudflare);
  console.log('pe', process.env);
  const dbUrl = useRuntimeConfig(event).DATABASE_URL;

  return {
    message: 'Hello World',
    database: dbUrl || 'not set',
  };
});

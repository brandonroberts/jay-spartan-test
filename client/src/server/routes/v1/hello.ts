import { defineEventHandler } from 'h3';

export default defineEventHandler((event) => {
  const dbUrl = process.env.NITRO_DATABASE_URL;

  return {
    message: 'Hello World',
    database: dbUrl || 'not set',
  };
});

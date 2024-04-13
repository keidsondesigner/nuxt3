import pg from "pg";

// Ambiente de desenvolvimento Docker
// export const postgresClient = () => {
//   const client = new pg.Pool({
//     host: process.env.POSTGRES_HOST,
//     database: process.env.POSTGRES_DATABASE,
//     port: Number(process.env.POSTGRES_PORT),
//     user: process.env.POSTGRES_USER,
//     password: process.env.POSTGRES_PASSWORD,
//   });

//   return {
//     client,
//   };
// };

// Ambiente de produção
export const postgresClient = () => {
  const client = new pg.Pool({
    connectionString: process.env.POSTGRES_URL,
  });

  return {
    client,
  };
};
import express, { Express } from "express";
import knex from "knex";
import dotenv from "dotenv";
import cors from "cors";
import { AddressInfo } from "net";
import { createTeacher } from "./endpoints/createTeacher";

// ================ CONFIGURAÇÃO DO SERVIDOR =====================
dotenv.config();

export const connection = knex({
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
   }
})

const app: Express = express();
app.use(express.json());
app.use(cors())


// ==================== ENDPOINTS =============================

app.post("/labenu/teacher", createTeacher)



const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
});

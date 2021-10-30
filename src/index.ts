import express from "express";
import swaggerUi from "swagger-ui-express";

import { usersRoutes } from "./routes/users.routes";

import swaggerDocs from './swagger.json';

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.get("/terms", (request, response) => {
  return response.json({
    message: "Termos de Serviço"
  });
});

app.use("/users", usersRoutes);

export { app };
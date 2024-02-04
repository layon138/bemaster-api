import express, { Express, Request, Response } from "express";
import router from "./routes/router.index";
import cors from "express";
import dbInit from "./database/mongo.config";
import swaggerUi from "swagger-ui-express";
import swaggerOutput from "./swagger_output.json";

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(router);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerOutput));
dbInit().then();
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
import express from "express";
import { UserRoutes } from "./app/modules/user/user.route";
const app = express();
import cors from "cors";
import { globalErrorHandler } from "./app/middlewares/globalErrorHandler";
import notFound from "./app/middlewares/notFound";

app.use(express.json());
app.use(cors());
app.use("/api/v1/user", UserRoutes);

app.get("/", (req, res) => {
  res.send("server is running");
});

app.use(globalErrorHandler);
app.use(notFound);

export default app;

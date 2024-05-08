import express from "express";
import router from "./routes";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors());

app.use("/", router);

app.listen(8080, () => console.log("Listening on port 8080"));

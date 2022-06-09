import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import router from "./routes/routes.js";

dotenv.config();

export const app = express();
const port =
    process.env.NODE_ENV === "test" ? process.env.TEST_PORT : process.env.PORT;

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/", router);

app.use((err, req, resp, next) => {
    console.log(err.message);
    resp.status(err.status);
    resp.send({ error: err.message });
});

export const connection = app.listen(port, (err) => {
    if (err) console.log("Error in server setup");
    console.log("Server listening on Port", port);
});

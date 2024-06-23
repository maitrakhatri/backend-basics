import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
); //to set origin to a specific URL and will not allow other urls to hit the api endpoint

app.use(
  express.json({
    limit: "16kb",
  })
); //to limit the accepting uploaded file size
app.use(
  express.urlencoded({
    extended: true,
    limit: "16kb",
  })
); //to enable the reading of encoded data from url where "space" is replace by %20
app.use(express.static("public")); //to save assets on server in "public" folder

app.use(cookieParser());

export { app };

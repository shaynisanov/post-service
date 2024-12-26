import express, {Express} from 'express';
import mongoose from 'mongoose';
import {json, urlencoded} from 'body-parser';
import {postRouter} from './routes/postsRoutes';
import {commentRouter} from './routes/commentsRoutes';
import {userRouter} from './routes/usersRoutes';
import 'dotenv/config';
import swaggerUI from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";

const app = express();

const db = mongoose.connection;
db.once('open', () => console.log('Connected to assignment database'));
db.on('error', (error) => console.error(error));

app.use(json());
app.use(urlencoded({extended: true}));
app.use('/posts', postRouter);
app.use('/comments', commentRouter);
app.use('/users', userRouter);

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Posts Server REST API",
      version: "1.0.0",
      description: "Posts REST server including authentication using JWT",
    },
    servers: [{ url: "http://localhost:3000", },],
  },
  apis: ["./src/routes/*.ts"],
};
const specs = swaggerJsDoc(options);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));
 

const initializeExpress = () =>
  new Promise<Express>((resolve, reject) => {
    if (!process.env.DB_CONNECT) {
      reject('DB_CONNECT is not defined in .env file');
    } else {
      mongoose
        .connect(process.env.DB_CONNECT)
        .then(() => {
          resolve(app);
        })
        .catch((error) => {
          reject(error);
        });
    }
  });

export {initializeExpress};

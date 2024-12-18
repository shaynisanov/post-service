import {initializeExpress} from './server';

const port = process.env.PORT;

initializeExpress().then((app) => {
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
});

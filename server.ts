/* eslint-disable no-console */
import app from './app';

const port = 3000;

app.listen(port, (): void => {
  console.log(`Example app listening on port ${port}`);
});

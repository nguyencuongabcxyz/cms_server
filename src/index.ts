import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use((req, res, next) => {
  res.send('ALOALOALOAlodfd');
});

app.listen(5000, () => { console.log('Listening....'); });

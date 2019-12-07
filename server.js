import express, { static } from 'express';
const app = express();

app.use(static(__dirname + '/dist'));
app.listen(process.env.PORT || 8080);
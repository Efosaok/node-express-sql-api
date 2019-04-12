import dotenv from 'dotenv'; // eslint-disable-line
import express from 'express';
import bodyParser from 'body-parser';
import department from './routes/department';
import category from './routes/category';

dotenv.config();

const app = express();

const port = process.env.PORT || 2345;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

department(app);
category(app);

app.listen(port, () => console.log(`API IS RUNNING ON PORT ${port}`));

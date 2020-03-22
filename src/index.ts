import express from 'express';
import bodyParser from 'body-parser';
import UserRoute from './routes/user-route';
import TaskRoute from './routes/task-route';
import AuthRoute from './routes/auth-route';
import ExceptionMiddleware from './middlewares/exception-middleware';
import { DbConnector } from './dbConnector';

const app = express();

const dbConnector = new DbConnector('mongodb+srv://cuongpro:abcxyz123@taskapp-ta9gv.mongodb.net/task-app?retryWrites=true&w=majority');
dbConnector.connect();

app.use(bodyParser.json());
app.use('/api', AuthRoute);
app.use('/api/users', UserRoute);
app.use('/api/tasks', TaskRoute);

app.use(ExceptionMiddleware);

app.listen(5000, () => { console.log('Listening....'); });

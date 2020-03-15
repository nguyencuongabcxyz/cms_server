import express from 'express';
import UserRoute from './routes/user-routes';
import TaskRoute from './routes/task-routes';
import ExceptionHandler from './middlewares/exceptionHandler';
import { DbConnector } from './dbConnector';

const app = express();

const dbConnector = new DbConnector('mongodb+srv://CuongNguyen:Abcxyz123@taskapp-ta9gv.mongodb.net/task-app?retryWrites=true&w=majority');
dbConnector.connect();

app.use('/api/users', UserRoute);
app.use('/api/tasks', TaskRoute);

app.use(ExceptionHandler);

app.listen(5000, () => { console.log('Listening....'); });

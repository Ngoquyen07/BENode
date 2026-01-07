import express from 'express';
import {studentRouter} from "./routes/student.route.js";
const app = express();
app.use(express.json())
app.use('/api/students', studentRouter);
export default app;
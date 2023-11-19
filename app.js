import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import registerRouter from './routes/index.js'
import models from './models/index.js'
const app = express();

const initialize = (app) => {
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded());
    mongoose.connect('mongodb+srv://info6150user:qucHuj-4fegzy-kyptad@info6150fall2023.urnad.mongodb.net/kanban?retryWrites=true&w=majority');
    
    registerRouter(app);
}

export default initialize;

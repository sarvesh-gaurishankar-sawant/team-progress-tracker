import userRouter from './routes.js'
import boardRouter from './board-routes.js'

export default (app) => {
    app.use('/users', userRouter);
    app.use('/boards', boardRouter);
}
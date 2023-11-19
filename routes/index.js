import userRouter from './routes.js'

export default (app) => {
    app.use('/users', userRouter);
    // app.use('/instructors', instructorRouter);
}
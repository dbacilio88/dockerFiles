const personaRouter = require('./controller');

const router = (app)=>{
    app.use('/api',personaRouter);
}

module.exports = router;
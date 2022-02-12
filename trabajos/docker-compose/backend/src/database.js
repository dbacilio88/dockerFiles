

module.exports = {
    parameters: {
        url: 'mongodb://10.64.123.78:27017',
        mongo_opts: {
            user: 'cbaciliod',
            pass: 'cbaciliod',
            dbName: 'docker_mongo_db',
            useCreateIndex: true,
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        }
    }
}
const personaModel = require('./model');


const findall = () => {
    return new Promise((resolve, reject) => {
        personaModel.find((err, data) => {
            if (err) {
                reject(err);
            }
            resolve(data)
        });
    });
};

const save = (persona) => {

    return new Promise((resolve, reject) => {

        let p = new personaModel(persona);

        p.save((err, data) => {
            if (err) {
                reject(err);
            }

            resolve(data);
        })


    });
}



module.exports = {
    findall,
    save
}
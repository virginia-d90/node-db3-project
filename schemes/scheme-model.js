const db = require("../data/db-config")

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}


function find(){
    return db("schemes")
}

function findById(id){
    return db("schemes").where({ id }).first()
}

function findSteps(id){
    
}

function add(scheme){
    return db("schemes")
    .insert(scheme, "id")
    .then(([id]) => {
        return findById(id);
    });
}

function update(id, changes){
    return db("schemes")
    .where({ id })
    .update(changes)
    .then(() => {
        return findById(id);
    });
}

function remove(id){

}
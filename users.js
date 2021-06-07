const { User } = require('../models')
module.exports = {
    getAllUsers() {
    return User.findAll()
    },
    // méthodes à implémenter
    getUsers(offset = 0, limit = 10) { return User.getUsers(offset,limit)},
    getAdmins() {return User.getAdmins() },
    getAuthors() { return User.getAuthors()},
    getGuests(){return User.getGuests() },
    getUser(id) {return User.getUser(id)},
    getUserByEmail(email) { return User.getUserByEmail()},
    addUser(user) { return User.addUser(user)},
    updateUser() { return User.updateUser()},
    deleteUser() { return User.deleteUser()},
    // D'autres méthodes jugées utiles
    }
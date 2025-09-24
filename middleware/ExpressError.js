// This is our coustom Error class

class ExpressError extends Error {
    constructor(status, message) {
        super()
        this.status = status;
        this.message = message
    }
}

module.exports = ExpressError
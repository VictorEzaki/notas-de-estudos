module.exports = class Transfer {
    constructor(userSend, userReceived, value) {
        this.userSend = userSend
        this.userReceived = userReceived
        this.value = value
        this.createdAt = new Date()
    }
}
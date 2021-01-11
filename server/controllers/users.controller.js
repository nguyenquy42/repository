const users = [
    { id: '1', name: ' Hieu' },
    { id: '2', name: ' Quang' },
    { id: '3', name: ' Thanh' },
    { id: '4', name: ' Minh' },
]

module.exports.getUsers = (req, res) => {
    res.send('users', { users })
}
module.exports = (app) => {
    app.post('/register', (req, res) => {
        res.send({
            message: 'Salut! Te-ai inregistrat cu succes!'
        })
    })
}
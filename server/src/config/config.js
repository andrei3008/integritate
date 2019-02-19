module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'integritate',
        user: process.env.DB_USER || 'integritate',
        password: process.env.DV_PASS || 'integritate',
        options:{
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './integritate.sqlite',
            operatorsAliases: false
        }
    }
}

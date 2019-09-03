module.exports = {
    dialect: 'sqlite',
    database: 'meetapp',
    username: 'admin',
    password: 'powerword',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true
    },
    storage: './meetapp.sqlite'
}

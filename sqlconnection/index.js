const {Sequelize} = require('sequelize')

const sequilize = new Sequelize('tes', 'root', 'root', {
    host :'localhost',
    dialect:'mysql'
})

sequilize.authenticate().then(()=>{
    console.log('Database Connected Successfully')
}).catch((err)=>{
    console.log('Unable to connect to DB')
})
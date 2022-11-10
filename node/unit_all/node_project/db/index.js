const Sequilize = require('sequelize');

const sequelize = new Sequilize('node1', 'root', 'root',  {
    dialect: "mysql",
    host : "localhost",
    port : 8889
})


const Image = require('./Image')(sequelize);

module.exports = {
    sequelize : sequelize,
    image: Image
}
const Sequelize = require('sequelize');
const sequelize = new Sequelize("jt", "root", "root", {
    host: 'localhost',
    port: 5000,
    dialect: 'mysql'
});

const login = async (username, passw) => {
    try {
        const [result, metadata] = await sequelize.query("SELECT * FROM `jt` where ", {});

        return result;
    } catch (error) {
        console.error("Une erreur s'est produite lors de la récupération des données du muscle :", error);
        throw error;
    }
}

module.exports = login;

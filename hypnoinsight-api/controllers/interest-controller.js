const knex = require("knex")(require("../knexfile"));

const interests = async (_req, res) => {
    try {
        const data = await knex("interests");
        res.status(200).json(data);
    } catch (error) {
        res.status(500).send(`Error retrieving interests: ${error}`);
    }
}

module.exports = {
    interests
}
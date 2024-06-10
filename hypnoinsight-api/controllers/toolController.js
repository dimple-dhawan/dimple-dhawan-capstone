const knex = require("knex")(require("../knexfile"));

const tools = async (_req, res) => {
    try {
        const data = await knex("tools").select({id: 'id', tool: 'tool'});
        res.status(200).json(data);
    } catch (error) {
        res.status(500).send(`Error retrieving pages: ${error}`);
    }
}

module.exports = {
    tools
}
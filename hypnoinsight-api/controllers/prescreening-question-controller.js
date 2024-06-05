const knex = require("knex")(require("../knexfile"));

const prescreeningQuestions = async (_req, res) => {
    try {
        const data = await knex("prescreening_questions");
        res.status(200).json(data);
    } catch (error) {
        res.status(500)
            .send(`Error retrieving prescreening questions: ${error}`);
    }
}


module.exports = {
    prescreeningQuestions
}
const knex = require("knex")(require("../knexfile"));

// return all answers
const allPrescreeningAnswers = async (_req, res) => {
    try {
        const data = await knex("prescreening_answers");
        res.status(200).json(data);
    } catch (error) {
        res.status(500).send(`Error retrieving prescreening answers: ${error}`);
    }
}

// return answers for specific question
const prescreeningAnswerOptions = async (req, res) => {
    try {
        const answerFound = await knex("prescreening_answers")
            .where ({ question_id: req.params.id });

        if (answerFound === 0) {
            return res.status(404).json({
                message: `Answers for the prescreening question not found`
            });
        }

    } catch (error) {
        return res.status(500).json({
            message: `Unable to retrieve the possible answers to the prescreening question`
        })
    }
}

module.exports = {
    allPrescreeningAnswers,
    prescreeningAnswerOptions
}
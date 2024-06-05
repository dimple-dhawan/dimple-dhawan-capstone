const knex = require('knex')(require('../knexfile'));

const addUserAnswer = async (req, res) => {
    if (!req.body.user_id ||
        !req.body.question_id ||
        !req.body.answer_id) 
    {
        return status(400).json({
            message: `Unable to save response`
        })
    }

    try {
        const user_response = await knex('user_answer').insert({
            user_id: req.body.user_id,
            question_id: req.body.question_id,
            answer_id: req.body.answer_id
        });

        const newAnswerId = user_response[0];
        const newAnswer = await knex('user_answers')
            .where({ id: newAnswerId })
            .first();
        res.status(201).json(newAnswer);

    } catch (error) {
        res.status(500).json({
            message: `Unable to save new warehouse: ${error}`
        });
    }
}

module.exports = {
    addUserAnswer
}


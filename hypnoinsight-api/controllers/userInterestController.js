const knex = require('knex')(require('../knexfile'));

const getUserInterests = async (_req, res) => {
    try {
        const data = await knex("user_interests").select({id: 'user_id', interest: 'interest_id'});
        res.status(200).json(data);
    } catch (error) {
        res.status(500).send(`Error retrieving interests: ${error}`);
    }
}

const addUserInterest = async (req, res) => {
    if (!req.body.user_id ||
        !req.body.interest_id) 
    {
        return status(400).json({
            message: `Unable to save user interest(s)`
        })
    }

    try {
        const user_interests = await knex('user_interests').insert({
            user_id: req.body.user_id,
            interest_id: req.body.interest_id,
        });

        const newInterestId = user_interests[0];
        const newInterest = await knex('user_interests')
            .where({ id: newInterestId })
            .first();
        res.status(201).json(newInterest);

    } catch (error) {
        res.status(500).json({
            message: `Unable to save new user interest(s): ${error}`
        });
    }
}

module.exports = {
    addUserInterest,
    getUserInterests
}


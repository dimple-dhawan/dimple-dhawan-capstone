const knex = require('knex')(require('../knexfile'));

const addUser = async (req, res) => {
    if (!req.body.user_id) {
        return res.status(400).json({
            message: `Unable to save user.`
        });
    } else if (!req.body.first_name) {
        return res.status(400).json({
            message: `First name is required.`
        });
    } else if (!req.body.last_name) {
        return res.status(400).json({
            message: `Last name is required.`
        });
    } else if (!req.body.email) {
        return res.status(400).json({
            message: `Email is required.`
        });
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
    addUser
}


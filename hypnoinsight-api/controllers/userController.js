const knex = require('knex')(require('../knexfile'));

const addUser = async (req, res) => {
    if (!req.body.first_name) {
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
        const users = await knex('users').insert({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email
        });

        const newUserId = users[0];

        const newUser = await knex('users')
        .where({id: newUserId})
        .first()
            res.status(201).json(newUser);

    } catch (error) {
        res.status(500).json({
            message: `Unable to save new user: ${error}`
        });
    }
}

module.exports = {
    addUser
}


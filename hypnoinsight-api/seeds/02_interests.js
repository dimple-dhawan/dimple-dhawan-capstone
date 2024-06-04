exports.seed = async function (knex) {
    await knex('interests').del();
    await knex('interests').insert([
        {
            id: 1,
            interest: 'Anxiety',
        },
        {
            id: 2,
            interest: 'Trauma',
        },
        {
            id: 3,
            interest: 'Fears (of Abandonment, Success, Failure, etc)',
        },
        {
            id: 4,
            interest: 'Phobias',
        },
        {
            id: 5,
            interest: 'Smoking Cessation',
        },
        {
            id: 6,
            interest: 'Weightloss',
        },
        {
            id: 7,
            interest: 'Allergies',
        },
    ]);
};
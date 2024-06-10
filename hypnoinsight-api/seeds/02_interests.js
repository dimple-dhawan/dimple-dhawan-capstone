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
            interest: 'Fears',
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
        {
            id: 8,
            interest: 'Self-Confidence',
        },
        {
            id: 9,
            interest: 'Insomnia',
        },
        {
            id: 10,
            interest: 'Chronic Pain',
        },
        {
            id: 11,
            interest: 'Other',
        },
    ]);
};
exports.seed = async function (knex) {
    await knex('pages').del();
    await knex('pages').insert([
        {
            id: 1,
            title: 'Welcome',
            description: 'This is the landing page.'
        },
        {
            id: 2,
            title: 'Services',
            description: 'Services page'
        },
        {
            id: 3,
            title: 'Healing Modalities',
            description: 'Healing Modalities page'
        },
        {
            id: 4,
            title: 'Book Now',
            description: 'Book now page'
        }
    ]);
};
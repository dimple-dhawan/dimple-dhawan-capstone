exports.seed = async function (knex) {
    await knex('tools').del();
    await knex('tools').insert([
        {
            id: 1,
            tool: 'Hypnotherapy',
        },
        {
            id: 2,
            tool: 'Spiritual Hypnotherapy',
        },
        {
            id: 3,
            tool: 'Past Life Regression',
        },
        {
            id: 4,
            tool: 'Life Between Lives',
        },
        {
            id: 5,
            tool: 'Mindscaping',
        },
        {
            id: 6,
            tool: 'Integrative Kundalini Reiki',
        }
    ]);
};
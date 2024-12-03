const { PHASE_PRODUCTION_BUILD, PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            env: {
                mongodb_username: 'pablo',
                mongodb_password: 'sG05vQKWPaNWKH6q',
                mongodb_cluster: 'cluster0',
                mongodb_database: 'my-site-dev'
            }
        }
    }

    return {
        env: {
            mongodb_username: 'pablo',
            mongodb_password: 'sG05vQKWPaNWKH6q',
            mongodb_cluster: 'cluster0',
            mongodb_database: 'my-site'
        }
    }
};
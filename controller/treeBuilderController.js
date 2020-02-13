const actions = require('../actions/treeBuilder');

exports.build = (req, res, next) => {
    actions.build(req, res, next);
};

const actions = require('../actions/dbActions');

exports.save = (req, res, next) => {
    actions.save(req, res, next);
};
exports.load = (req, res, next) => {
    actions.load(req, res, next);
};

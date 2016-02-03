module.exports.index = function(req, res) {
    res.render('index', {title : 'Express'});
}

module.exports.data = function(req, res) {
    res.render('data');
}


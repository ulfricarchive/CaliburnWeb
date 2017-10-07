exports.index = function(req, res) {
    res.render('index', { title: 'Home'});
};

exports.play = function(req, res) {
    res.render('play', { title: 'Play'});
};
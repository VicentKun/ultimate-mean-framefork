var express = require('express');
var router = express.Router();

router.post('/:model/:method', function (req, res) { // Atención este metodo genérico es para usuarios conectados.
    
    // if (!req.user) { res.send({error: "Ha habido un error"}); return; }
    
    var model = require('../models/' + req.params.model);
    
    var method = req.params.method;
    
    var params = JSON.parse(JSON.stringify(req.body));
    
    console.log(params);

    // params.session = req.user;
    
    var obj = new model(req[req.params.model]);
    
    obj[method](params, function (response) {
        
        res.send(response);
        
    });

});

module.exports = router;
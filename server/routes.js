var express = require('express'),
router = express.Router(),
home = require('../controllers/home');
image = require('../controllers/image');

module.exports = function(app){
	/*router.get('/', home.index);
	router.get('/images/:image_id', image.index);
	router.post('/images',image.create);
	router.post('/images/:image_id/like', image.like);
	router.post('/images/:image_id/comment', image.comment);
	router.delete('/images/:image_id', image.remove);
	
	app.use(router);*/
	
	app.get('/', home.index);
	app.get('/images/:image_id', image.index);
	app.post('/images',image.create);
	app.post('/images/:image_id/like', image.like);
	app.post('/images/:image_id/comment', image.comment);
	app.delete('/images/:image_id', image.remove);
};
var express = require('express');
var app = express();

var PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
	res.json([{
		user_id: '1',
		user_name: 'Vivek Chaudhary'
	}]);
});


app.listen(PORT, () => {
	console.log(`App is running on ${PORT}`);
});
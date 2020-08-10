var express = require('express');
var app = express();

var PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
	res.json([{
		user_id: '1',
		user_name: 'Vivek Chaudhary'
	},{
		user_id: '2',
		user_name: 'Neha Chaudhary'
	},{
		user_id: '3',
		user_name: 'Rohit Kumar'
	},{
		user_id: '4',
		user_name: 'Ashwini'
	}]);
});


app.listen(PORT, () => {
	console.log(`App is running on ${PORT}`);
});
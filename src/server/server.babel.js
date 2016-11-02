var express = require('express');
var bodyParser = require('body-parser')
var Items = require('./models/items');
var Filters = require('./models/filter');
var Database = require('./models/database');
var Monuments = require ('./models/monuments');
var db = new Database();
var monuments = new Monuments(db.db);



const app = express();

app.use('/', express.static('public'));
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.post("/GetItems",function(req,res){
	res.setHeader('Content-Type', 'application/json');
	var items = new Items( req.body.monument,req.body.supplier,req.body.filter,db.db,monuments.monumentsArray);
	items.getItems(function(result){
		if (result != undefined)
			res.send({"code":0,"result":result});
		else	
			res.json({"code":-1});	
	});
});

app.post("/GetFilters",function(req,res){
 	res.setHeader('Content-Type', 'application/json'); 
	if (req.body!= undefined && req.body.monument!=undefined){
		var filters = new Filters(req.body.monument,db.db,monuments.monumentsArray);
		filters.getFilters(function(result){
			if (result)
				res.send({"code":0,"result":result});
			else	
				res.json({"code":-1});	
		});
	}else{
		res.json({"code":-1});
	}
	
});

app.post("/GetMonuments",function(req,res){
	res.setHeader('Content-Type', 'application/json');
	monuments.getMonuments(function(r){
		res.json({"code":0,"result":r});
		console.log(monuments.monumentsArray);	
	});
});


app.listen(process.env.PORT || 3000);
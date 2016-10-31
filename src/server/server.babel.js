var express = require('express');
var bodyParser = require('body-parser')
var Items = require('./models/items');
var Filters = require('./models/filter');
var Database = require('./models/database');
var Monuments = require ('./models/monuments');
var db = new Database();
var monuments = new Monuments(db);


const app = express();

app.use('/', express.static('public'));
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.post("/GetItems",function(req,res){
	res.setHeader('Content-Type', 'application/json');
	if (req.body!= undefined && req.body.type!=undefined && req.body.filter != undefined){
		var items = new Items( req.body.type,req.body.filter,db.db);
		items.getItems(function(result){
			if (result != undefined)
				res.send({"code":0,"result":result});
			else	
				res.json({"code":-1});	
		});
		db.db.close();
	}else{
		//res.send(JSON.stringify({"code":-1}));
		res.json({"code":-1});
	}
});

app.post("/GetFilters",function(req,res){
	res.setHeader('Content-Type', 'application/json');
	if (req.body!= undefined && req.body.catalogue!=undefined){
		var filters = new Filters(req.body.catalogue,db.db);
		filters.getFilters(function(result){
			if (result != undefined)
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
	res.json({"code":0,"result":monuments});
});


app.listen(process.env.PORT || 3000);
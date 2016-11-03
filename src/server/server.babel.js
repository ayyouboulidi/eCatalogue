var express = require('express');
var bodyParser = require('body-parser')
var Items = require('./models/items');
var Filters = require('./models/filter');
var Database = require('./models/database');
var Cache = require ('./models/cache');
var Monuments = require ('./models/monuments');
var Contacts = require ('./models/contacts');
var db = new Database();
var monumentsTmp = new Cache(new Monuments(db.db),5*1000);
var contactsTmp = new Cache(new Contacts(db.db),3600*24*1000);

const app = express();

app.use('/', express.static('public'));
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.post("/GetItems",function(req,res){
	res.setHeader('Content-Type', 'application/json');
	var items = new Items( req.body.monument,req.body.supplier,req.body.filter,db.db,monumentsTmp.value.monumentsArray);
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
		var filters = new Filters(req.body.monument,db.db,monumentsTmp.value.monumentsArray);
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

app.post("/GetContacts",function(req,res){
	res.setHeader('Content-Type', 'application/json');
	var contacts = contactsTmp.getValue();
	if (contacts==undefined){
		contactsTmp.setValue(new Contacts(db.db));
		contacts = contactsTmp.getValue();
		contacts.getContacts(function(c){
			console.log(c);	
		});
	}
	contacts.getContacts(function(c){
		if (c)
			res.json({"code":0,"result":c});
		else	
			res.json({"code":-1});
	});
});

app.post("/GetMonuments",function(req,res){
	res.setHeader('Content-Type', 'application/json');
	var monuments = monumentsTmp.getValue();
	if (monuments==undefined){
		monumentsTmp.setValue(new Monuments(db.db));
		monuments = monumentsTmp.getValue();
		monuments.getMonuments(function(m){
			console.log(monuments.monumentsArray);	
		});
	}
	monuments.getMonuments(function(r){
		res.json({"code":0,"result":r});	
	});
});


app.listen(process.env.PORT || 3000);
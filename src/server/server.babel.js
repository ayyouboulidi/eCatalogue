var express = require('express');
var bodyParser = require('body-parser')
var Items = require('./models/items');
var Filters = require('./models/filter');
var Database = require('./models/database');
var Cache = require ('./models/cache');
var Monuments = require ('./models/monuments');
var Contacts = require ('./models/contacts');
var Suppliers = require('./models/supplier');
var Projects = require('./models/project');
var db = new Database();
var monumentsTmp = new Cache(new Monuments(db.db),5*1000);
var contactsTmp = new Cache(new Contacts(db.db),3600*24*1000);
var suppliersTmp = new Cache(new Suppliers(db.db),10*1000);
var projectsTmp = new Cache(new Projects(db.db),2*1000);

const app = express();

app.use('/', express.static('public'));
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.post("/GetItems",function(req,res){
	res.setHeader('Content-Type', 'application/json');
	var keys = Object.keys(req.body);
	var parms = new Object();
	keys.forEach(function (key) {
		switch(key.toLowerCase()){
			case "monument":
				parms.monument=req.body[key];
				break;
			case "filter":
				parms.filter= req.body[key];
				break;
			case "supplier":
				parms.supplier = req.body[key];
				break;
			default:
				break;
		}
	});
	var items = new Items( db.db,parms.monument,parms.supplier,parms.filter,monumentsTmp.value.monumentsArray);
	items.getItems(function(result){
		if (result != undefined)
			res.send({"code":0,"result":result});
		else	
			res.json({"code":-1});	
	});
	console.log("/GetItems: arguments="+JSON.stringify(req.body));
});

app.post("/SearchItems",function(req,res){
	res.setHeader('Content-Type', 'application/json');
	var items = new Items(db.db);
	items.searchItems(function(result){
		if (result != undefined)
			res.send({"code":0,"result":result});
		else	
			res.json({"code":-1});	
	},req.body.req);
	console.log("/SearchItem: arguments="+JSON.stringify(req.body));
});

app.post("/GetFilters",function(req,res){
 	res.setHeader('Content-Type', 'application/json'); 
	if ( req.body!= undefined && (req.body.monument!=undefined || req.body.equipment!=undefined) ){
		var filters = new Filters(req.body.monument,req.body.equipment,db.db,monumentsTmp.value.monumentsArray);
		filters.getFilters(function(result){
			if (result)
				res.send({"code":0,"result":result});
			else	
				res.json({"code":-1});	
		});
	}else{
		res.json({"code":-1});
	}
	console.log("/GetFilters: arguments="+JSON.stringify(req.body));
});

app.post("/GetContacts",function(req,res){
	res.setHeader('Content-Type', 'application/json');
	var contacts = contactsTmp.getValue();
	if (contacts==undefined){
		contactsTmp.setValue(new Contacts(db.db));
		contacts = contactsTmp.getValue();
	}
	contacts.getContacts(function(c){
		if (c)
			res.json({"code":0,"result":c});
		else	
			res.json({"code":-1});
	});
	console.log("/GetContacts: arguments="+JSON.stringify(req.body));
});

app.post("/GetMonuments",function(req,res){
	res.setHeader('Content-Type', 'application/json');
	var monuments = monumentsTmp.getValue();
	if (monuments==undefined){
		monumentsTmp.setValue(new Monuments(db.db));
		monuments = monumentsTmp.getValue();
	}
	monuments.getMonuments(function(r){
		res.json({"code":0,"result":r});	
	});
	console.log("/GetMonuments: arguments="+JSON.stringify(req.body));
});

app.post("/GetSuppliers",function(req,res){
	res.setHeader('Content-Type', 'application/json');
	var suppliers = suppliersTmp.getValue();
	if (suppliers==undefined){
		suppliersTmp.setValue(new Suppliers(db.db));
		suppliers = suppliersTmp.getValue();
	}
	suppliers.getSuppliers(function(r){
		if (r)
			res.json({"code":0,"result":r});
		else	
			res.json({"code":-1});	
	});
	console.log("/GetSuppliers: arguments="+JSON.stringify(req.body));
});

app.post("/GetProjects",function(req,res){
	res.setHeader('Content-Type', 'application/json');
	var projects = projectsTmp.getValue();
	if (projects==undefined){
		projectsTmp.setValue(new Projects(db.db));
		projects = projectsTmp.getValue();
	}
	projects.getProjects(function(p){
		if (p)
			res.json({"code":0,"result":p});
		else	
			res.json({"code":-1});
	},req.body.user);
	console.log("/GetProjects : arguments="+JSON.stringify(req.body));
});

app.post("/AddProjects",function(req,res){
	res.setHeader('Content-Type', 'application/json');
	var projects = projectsTmp.getValue();
	if (projects==undefined){
		projectsTmp.setValue(new Projects(db.db));
		projects = projectsTmp.getValue();
	}
	projects.addProjects(function(p){
		if (p!=undefined)
			res.json({code:0,changes:p});
		else	
			res.json({code:-1});
	},req.body.projects);
	console.log("/AddProjects : arguments="+JSON.stringify(req.body));
});

app.post("/DeleteProject",function(req,res){
	res.setHeader('Content-Type', 'application/json');
	var projects = projectsTmp.getValue();
	if (projects==undefined){
		projectsTmp.setValue(new Projects(db.db));
		projects = projectsTmp.getValue();
	}
	var project = new Object();
	project.id = req.body.id;
	project.user = req.body.user;
	projects.deleteProject(function(p){
		if (p!=undefined)
			res.json({code:0,changes:p});
		else	
			res.json({code:-1});
	},project);
	console.log("/DeleteProjects : arguments="+JSON.stringify(req.body));
});


app.listen(process.env.PORT || 3000);
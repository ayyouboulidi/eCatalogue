function Database(name="eCatalogue") {
	var fs = require("fs");
	var file = name+".db";
	var exists = fs.existsSync(file);
	var sqlite3 = require("sqlite3").verbose();
	this.db = new sqlite3.Database(file);
	var db = this.db;
	db.serialize(function() {
	if(!exists) {
	
		db.run("CREATE TABLE IF NOT EXISTS monuments("
		+"id  INTEGER PRIMARY KEY AUTOINCREMENT    NOT NULL,"
		+"name                             TEXT    NOT NULL,"
		+"description                      TEXT    NOT NULL,"
		+"url                              TEXT    NOT NULL "
		+");");
		
		db.run("CREATE TABLE IF NOT EXISTS items("
		+"id         INTEGER PRIMARY KEY AUTOINCREMENT   NOT NULL,"
		+"id_monument                          INTEGER   NOT NULL,"
		+"id_supplier                          INTEGER   NOT NULL,"
		+"name                                    TEXT   NOT NULL,"
		+"title                                   TEXT   NOT NULL,"
		+"date                                    TEXT   NOT NULL,"
		+"description                             TEXT   NOT NULL,"
		+"score                                INTEGER   NOT NULL,"
		+"url_image                               TEXT   NOT NULL "
		//+" FOREIGN KEY(id_catalogue) REFERENCES catalogue(id)"+
		+");");
		
		db.run("CREATE TABLE IF NOT EXISTS filter("
		+"id         INTEGER PRIMARY KEY AUTOINCREMENT   NOT NULL,"
		+"id_item                              INTEGER   NOT NULL,"
		+"name                                    TEXT   NOT NULL,"
		+"value                                   TEXT   NOT NULL "
		+");");
		
		db.run("CREATE TABLE IF NOT EXISTS `contacts` ("
		+" `id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,"
		+" `name` TEXT NOT NULL,"
		+" `tel` TEXT NOT NULL "
		+")");
		
		db.run("CREATE TABLE IF NOT EXISTS `projects` ("
		+"`id`	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,"
		+"`id_item`	TEXT NOT NULL,"
		+"`date`	TEXT NOT NULL,"
		+"`quantity`	INTEGER NOT NULL"
		+");");
		
		db.run("CREATE TABLE IF NOT EXISTS `supplier` ("
		+"`id`	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,"
		+"`name`	TEXT NOT NULL,"
		+"`description`	TEXT,"
		+"`url`	TEXT"
		+");");
		
		var inserted=false;
	
		/*
		var stmt = db.prepare("INSERT INTO catalogue(name) " 
		+"SELECT ? " 
		+"WHERE NOT EXISTS ( SELECT 1 FROM catalogue WHERE name = ?)");
		var catalogues = ["Galley","Lavatory","Seat","Partition"];
		for (var i = 0; i < 4; i++) {
			stmt.run(catalogues[i],catalogues[i]);
		}
		stmt.finalize();
		stmt = db.prepare('INSERT INTO items (id_catalogue,title,name,date,description,score,url_image) '
				+'SELECT id,"lab","map", strftime(\'%s\',\'now\'),"apap",3,"img/AL.jpg" FROM catalogue '
				+'WHERE name = "Galley";');
		stmt.run();
    	stmt.finalize();
		stmt = db.prepare('INSERT INTO items (id_catalogue,title,name,date,description,score,url_image) '
				+'SELECT id,"mal","mop",  strftime(\'%s\',\'now\'),"ap",1,"img/bel.jpg" FROM catalogue '
				+'WHERE name = "Galley";');
		stmt.run();
    	stmt.finalize();
		stmt = db.prepare('INSERT INTO items (id_catalogue,title,name,date,description,score,url_image) '
				+'SELECT id,"zal","mfol", strftime(\'%s\',\'now\'),"apap",2,"img/mep.jpg" FROM catalogue '
				+'WHERE name = "Galley";');
		stmt.run();
    	stmt.finalize();
		stmt = db.prepare('INSERT INTO items (id_catalogue,title,name,date,description,score,url_image) '
				+'SELECT id,"fol","tomp",  strftime(\'%s\',\'now\'),"apap",5,"img/fol.jpg" FROM catalogue '
				+'WHERE name = "Galley";');
		stmt.run();
    	stmt.finalize();
		*/
	}
});
}
module.exports = Database;
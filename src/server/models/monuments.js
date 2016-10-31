// This class will contain all the function that will get or modify an item(s) from the database


function Monument(id,name,description,url){
	this.id = id;
    this.name = name;
    this.description = description;
    this.url = url;
}

/**
 *  the class Items takes as an argument the class filter for selecting the right item
 *  Argument: type     : the type of the item
 *            filter   : the class filter that contains all the selection that have to be done in DB
 *            database : instance of the sqlite database (see getdatabase() of database.js)
 */
function Monuments(database) {
	this.database = database;
    getMonuments(function(m,i=0){
        if (m==undefined && i<10){
            getMonuments(this,i+1);
        }else if (m==undefined){
            var err = new Object();
            err.message = "CRITICAL : can't get monuments from database";
            err.type = "CustomException";
            throw err;
        }else{
            return true;
        }
    });
    
}

/*
** this function takes as parameters the callback that should be call when it finishes it's work. 
** The callback will have as a parameter the result of the call.
*/
Items.prototype.getMonuments = function(callback) {
	if (this.monuments == undefined){
    var statement = "SELECT id, url, name, description from monuments";				
	this.database.all(statement,params
	    , function(err, rows) {
			if (err){
				callback(undefined);
			}else{
				rows.forEach(function (row) {
					result.push(new Monument(row.id,row.name,row.description));
				});
				this.monuments = result;
				callback(this.monuments,arguments[1]);
			}
	});
    } else {
        callback(this.monuments,arguments[1]);
    }
}


module.exports = Monuments;
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
    this.monumentsArray = [];
    var that = this;
    this.getMonuments(function(m,i=0){
        if (m==undefined && i<10){
            that.getMonuments(this,i+1);
        }else if (m==undefined){
            var err = new Object();
            err.message = "CRITICAL : can't get monuments from database";
            err.type = "CustomException";
            throw err;
        }else{
            m.forEach(function(val,index){
                that.monumentsArray.push(val.name);
            });
            return true;
        }
    });
    
}

/*
** this function takes as parameters the callback that should be call when it finishes it's work. 
** The callback will have as a parameter the result of the call.
*/
Monuments.prototype.getMonuments = function(callback) {
	if (this.monuments == undefined){
        var result = [];
        var statement = "SELECT id, url, name, description from monuments";				
        this.database.all(statement
            , function(err, rows) {
                if (err){
                    callback(undefined);
                }else{
                    rows.forEach(function (row) {
                        result.push(new Monument(row.id,row.name,row.description,row.url));
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
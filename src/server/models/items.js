// This class will contain all the function that will get or modify an item(s) from the database


function Item(id,name,title,date,description,score,url_image){
	this.id = id;
	this.name = name;
	this.title = title;
	this.date = date;
	this.description = this.description;
	this.score = score;
	this.url_image;
}

/**
 *  the class Items takes as an argument the class filter for selecting the right item
 *  Argument: type     : the type of the item
 *            filter   : the class filter that contains all the selection that have to be done in DB
 *            database : instance of the sqlite database (see getdatabase() of database.js)
 */
function Items(type,filter,database) {
	console.log("type "+ type);
	console.log("filter "+ filter);
	this.type = type;
	this.database = database;
}

/*
** this function takes as parameters the callback that should be call when it finishes it's work. 
** The callback will have as a parameter the result of the call.
*/
Items.prototype.getItems = function(callback) {
	if (this.items==undefined){
		var result = [];
		switch(this.type) {
			case "Galley":
				break;
			case "Lavatory":
				break;
			case "Seat":
				break;   
			case "Partition":
				break;
			default:
				result = undefined;
				callback(result); 
		} 
		if (result!=undefined){
			var statement = "SELECT items.id as id, items.name as name, items.title as title,"
				+" items.date as date, items.description as description, items.score as score, items.url_image as url_image FROM items, monuments, filter"
				+" WHERE items.id_monument = monuments.id AND filter.id_item = items.id AND monuments.name = ?";
			var params = new Array(this.type);
			for (var i=0; i<this.filter.length ; i++){
				statement +=" AND filter.name=? AND "
			}
			console.log(statement);
				
			this.database.all(statement,params
			, function(err, rows) {
					if (err){
						callback(undefined);
					}else{
						rows.forEach(function (row) {
							result.push(new Item(row.id,row.name,row.title,row.date,row.description,row.score,row.url_image));
						});
						this.items = result;
						callback(this.items);
					}
			});
		}
		
	}else{
		callback(this.items);
	}
	
	
};

module.exports = Items;
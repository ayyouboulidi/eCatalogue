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
 * 			  monuments: array containing all possible monuments name 
 */
function Items(type,supplier,filters,database,monuments) {
	this.type = type;
	this.database = database;
	this.supplier = supplier;
	this.filters = filters;
	this.monuments = monuments;
}

/*
** this function takes as parameters the callback that should be call when it finishes it's work. 
** The callback will have as a parameter the result of the call.
*/
Items.prototype.getItems = function(callback) {
	if (this.items==undefined){
		var result = [];
		// Prefilter the requests by deleting all ones that have an incorrect monument if it's given
		if (this.type!=undefined && this.monuments.indexOf(this.type) == -1){
			result = undefined;
			callback(result); 
		} 
		if (result!=undefined){
			/*var statement = "SELECT items.id as id, items.name as name, items.title as title,"
				+" items.date as date, items.description as description, items.score as score, items.url_image as url_image FROM items, monuments, filter"
				+" WHERE items.id_monument = monuments.id AND filter.id_item = items.id";*/
			var params = [];
			var statement = "SELECT items.id, items.name AS name, items.title AS title, items.date AS date, "
			+"items.description AS description, items.score AS score, items.url_image AS url_image "
			+"FROM items, "
			+"( "
			+" SELECT *" 
			+" FROM filter" 
			+" WHERE id_item IN ("
		 	+"   SELECT id_item"
		    +"   FROM filter";
			if (this.filters!=undefined)
				this.filters.forEach(function(val,indx){
					if (indx == 0){
						statement += "WHERE (name=? AND value=?) ";
					}else{
						statement += "OR (name = ? AND value = ?) ";
					}	
					params.push(val.name,val.value);
				});
		 statement+= "  GROUP BY id_item ";
		 if (this.filters && this.filters.length>0){
			 statement+= "  HAVING count(*)=? ";
			 params.push(this.filters.length);
		 }
		 statement+= ") "
		 +"  GROUP BY id_item "
		 +" ) filters, catalogue, supplier"
 		 +" WHERE filters.id_item = items.id AND catalogue.id = items.id_catalogue AND supplier.id = items.id_supplier ";
		  if (this.type){
			  statement+="AND catalogue.name=?";
			  params.push(this.type);
		  }
		  if (this.supplier){
			  statement+="AND supplier.name=?";
			  params.push(this.type);
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
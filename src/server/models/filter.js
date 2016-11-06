function Filters(monument,equipment,db,monuments) {
	this.monument = monument;
	this.equipment = equipment;
	this.monuments = monuments;
	this.db = db;
}

function Filter(name,values){
    this.name = name;
    this.values = values;
}

Filters.prototype.getFilters = function(callback) {
	if (this.filters==undefined){
		var result = [];
		if (this.monument == undefined || this.monuments.indexOf(this.monument)>-1){
			var statement = "Select DISTINCT filter.name, filter.value from filter,items";
			var whereStatement; var param;
			if (this.monument){
				 statement +=",monuments ";
				 whereStatement =  "AND monuments.id = items.id_monument AND monuments.name =? ";
				 param = new Array(this.monument);
			}else{
				 statement +=",supplier ";
				 whereStatement =  "AND supplier.id = items.id_supplier AND supplier.name =? ";
				 param = new Array(this.equipment);
			}
			statement += "WHERE  filter.id_item=items.id "+whereStatement
			+"ORDER BY filter.name" ;
			this.db.all(statement,param
			, function(err, rows) {
					if (err){
						console.log(err);
						callback(undefined);
					}else{
						rows.forEach(function (row) {
							if (result[row.name]==undefined){
								result[row.name]=new Filter(row.name,new Array(row.value));
								result.push(result[row.name]);
							}else{
								result[row.name].values.push(row.value);
								result[result.length-1]= result[row.name];
							}
						});
						this.filters = result;
						callback(this.filters);
					}
				});
		 }else{
			result = undefined;
			callback(result);
		}
	}else{
		callback(this.filters);
	}


};

module.exports = Filters;

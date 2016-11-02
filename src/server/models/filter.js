function Filters(monument,db,monuments) {
	this.monument = monument;
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
 		console.log(this.monuments);
		console.log(this.monument);
		console.log(this.monuments.indexOf(this.monument)==-1);
		 if (this.monuments.indexOf(this.monument)>-1){	
			if (result!=undefined){
				var statement = "Select DISTINCT filter.name, filter.value from filter,items,monuments "
				+"WHERE monuments.id = items.id_monument AND filter.id_item=items.id AND monuments.name =? "
				+"ORDER BY filter.name" ;				
				this.db.all(statement,[this.monument]
				, function(err, rows) {
						if (err){
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
			}
		 }else{
			result = undefined;
			callback(result); 
		} 
	}else{
		callback(this.filters);
	}
	
	
};

module.exports = Filters;
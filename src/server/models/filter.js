function Filters(monument,db) {
	this.monument = monument;
    this.db = db;
}

function Filter(name,values){
    this.name = name;
    this.values = values;
}

Filters.prototype.getFilters = function(callback) {
	if (this.filters==undefined){
		var result = [];
		switch(this.monument) {
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
			var statement = "Select DISTINCT filter.name, filter.value from filter,items,monuments "
            +"WHERE monument.id = items.id_monuments AND filter.id_item=items.id AND monuments.name =? "
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
		callback(this.filters);
	}
	
	
};

module.exports = Filters;
function Suppliers(db) {
	this.db = db;
}

function Supplier(id,name,description,url){
    this.id = id;
    this.name = name;
	this.description = description;
    this.url = url;
}

Suppliers.prototype.getSuppliers = function(callback) {
	if (this.suppliers==undefined){
		var result = [];
		if (result!=undefined){
			var statement = "Select * from supplier";			
			this.db.all(statement
			, function(err, rows) {
					if (err){
						callback(undefined);
						console.log(err);
					}else{
						rows.forEach(function (row) {
								result.push(new Supplier(row.id,row.name,row.description,row.url));
						});
						this.suppliers = result;
						callback(this.suppliers);
					}
			});
		}
	}else{
		callback(this.suppliers);
	}	
};

module.exports = Suppliers;
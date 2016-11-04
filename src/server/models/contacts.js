function Contacts(db) {
	this.db = db;
}

function Contact(name,role,email,tel){
    this.name = name;
	this.role = role;
	this.email = email;
    this.tel = tel;
}

Contacts.prototype.getContacts = function(callback) {
	if (this.contacts==undefined){
		var result = [];
		if (result!=undefined){
			var statement = "Select * from contacts";			
			this.db.all(statement
			, function(err, rows) {
					if (err){
						callback(undefined);
						console.log(err);
					}else{
						rows.forEach(function (row) {
								result.push(new Contact(row.name,row.role,row.email,row.tel));
						});
						this.contacts = result;
						callback(this.contacts);
					}
			});
		}
	}else{
		callback(this.contacts);
	}	
};

module.exports = Contacts;
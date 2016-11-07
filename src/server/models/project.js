function Projects(db) {
	this.db = db;
}

function Project(id,user,itemName,itemUrl,itemDescription,itemTitle,date,quantity){
    this.id = id;
    this.user = user;
	this.item_url = itemUrl;
	this.item_name = itemName;
	this.item_description = itemDescription;
	this.item_title = itemTitle;
    this.date = date;
    this.quantity = quantity;
}

Projects.prototype.getProjects = function(callback,user) {
	var result = [];
	var statement = "Select projects.id, projects.user, items.name, items.url_image, items.description, items.title, projects.date, projects.quantity "+
	"from projects,items where items.id = projects.id_item ";
    if (user != undefined){
        statement +="AND user=?";
    }
	this.db.all(statement,
	user, function(err, rows) {
	    if (err){
			console.log(err);
		    callback(undefined);
		}else{
			rows.forEach(function (row) {
					result.push(new Project(row.id,row.user,row.name,row.url_image,row.description,row.title,row.date,row.quantity));
			});
			this.projects = result;
			callback(this.projects);
		}
	});
};

Projects.prototype.addProjects = function(callback,projects) {
	if (projects && projects.length>0){
        var params = [];
	    var statement = "";
        projects.forEach(function(element){
            if (statement == "")
                statement+='INSERT INTO projects (user,id_item,date,quantity) '
    			    	+'VALUES (?,?,strftime(\'%s\',\'now\'),?) ';
            else
                statement+=', (?,?,strftime(\'%s\',\'now\'),?) ';
            params.push(element.user,element.id_item,element.quantity);
        });
        console.log(params);
    	this.db.run(statement
	    	, params,function(err, rows) {
			if (err){
		    	callback(undefined);
				console.log(err);
			}else{
				callback(this.changes);
			}
         });
	}else{
		callback(undefined);
	}
};

Projects.prototype.deleteProject = function(callback,project) {
	if (project && project.id && project.user){
	    var statement = "";
        statement+='DELETE FROM projects WHERE id= ? AND user=?';
         var params = new Array(project.id,project.user);
    	this.db.run(statement
	    	, params,function(err, rows) {
			if (err){
		    	callback(undefined);
				console.log(err);
			}else{
				callback(this.changes);
			}
         });
	}else{
		callback(undefined);
	}
};


module.exports = Projects;

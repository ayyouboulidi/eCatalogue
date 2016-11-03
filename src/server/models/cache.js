/**
 * This class is used for saving result gotten from the database
 * When creating an instance, you can change the timeout in miniseconds by giving a value to timeout
 */
function Cache(value,timeout=360000){
    this.value = value;
    this.timeout = timeout;
    this.date = new Date();
}

Cache.prototype.setValue = function(value){
    this.value = value;
    this.date = new Date();
}

Cache.prototype.getValue = function(){
    if ( (new Date()).getTime() - this.date.getTime() > this.timeout )
        return undefined;
    else
        return this.value;
}

module.exports = Cache;

# code order matters?

Wow, just realized that there is some file hierarchy with JS. When this function is too low, then another function that relies on it, failed…
 
	  _.keys = function(obj) {
	    if (!_.isObject(obj)) return [];
	    if (nativeKeys) return nativeKeys(obj);
	    var keys = [];
	    for (var key in obj) if (_.has(obj, key)) keys.push(key);
	    return keys;
	  };
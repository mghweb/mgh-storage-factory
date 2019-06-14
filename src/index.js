export default {
	_get: function(string, key) {
		if (string) {
			var object;
			
			try {
				object = JSON.parse(string)
			}
			catch (e){}

			if (typeof object === 'object' || typeof object === 'array') {
				return object;
			}
			else {
				return string;
			}
		}
		else {
			console.warn('StorageFactory.get(): Unable to find "%s".', key);
			return false;
		}
	},
	_set: function(key, session) {
		// Verify "setItem" succeeded
		if (session === true) {
			var verify = sessionStorage.getItem(key);
		}
		else {
			var verify = localStorage.getItem(key);
		}
		if (verify === null) {
			console.warn('StorageFactory.set(): "%s" was unable to be set.', key);
			return false;
		}
		else {
			return true;
		}
	},
	_remove: function(key, session) {
		// Verify "removeItem" succeeded
		if (session === true) {
			var verify = sessionStorage.getItem(key);
		}
		else {
			var verify = localStorage.getItem(key);
		}
		if (verify !== null) {
			console.warn('StorageFactory.remove(): "%s" was NOT successfully removed.', key);
			return false;
		}
		else {
			return true;
		}
	},
	
	get: function(key) {
		var string = localStorage.getItem(key);
		return this._get(string, key);
	},
	sessionGet: function(key) {
		var string = sessionStorage.getItem(key);
		return this._get(string, key);
	},
	set: function(key, variable) {
		var string = (typeof variable == 'object') ? JSON.stringify(variable) : variable;
		localStorage.setItem(key, string);
		return this._set(key, false);
	},
	sessionSet: function(key, variable) {
		var string = (typeof variable == 'object') ? JSON.stringify(variable) : variable;
		sessionStorage.setItem(key, string);
		return this._set(key, true);
	},
	remove: function(key) {
		localStorage.removeItem(key);

		return this._remove(key, false);
	},
	sessionRemove: function(key) {
		sessionStorage.removeItem(key);

		return this._remove(key, true);
	}
};
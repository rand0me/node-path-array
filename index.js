'use strict';

function PathArray() {
	Array.prototype.constructor.apply(this, arguments);
}

PathArray.prototype = Object.create(Array.prototype);
PathArray.prototype.constructor = PathArray;

PathArray.fromArray = function fromArray(array) {
	var pathArray = new PathArray();
	pathArray.push.apply(pathArray, array);
	return pathArray;
};

PathArray.prototype.path = function path(string, cb) {
	var elem = this, id, path = string.split('.');
	while (id = path.shift()) {
		if (typeof elem === 'object' && elem[id]) {
			elem = elem[id];
			continue;
		}
		if (elem instanceof Array) {
			for (var i = 0, l = elem.length; i < l; i++) {
				if (elem[i].id === id) elem = elem[i].cfg;
			}
		}
	}
	cb && cb(elem);
	return elem;
};

PathArray.prototype.toArray = function () {
	var arr = [];
	Array.prototype.push.apply(arr, this);
	return arr;
};

module.exports = PathArray;

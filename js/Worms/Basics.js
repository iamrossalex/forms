export default class Basics {
	constructor() {}
	dom(str) {
		var div = document.createElement('div');
		div.innerHTML = str.trim();
		return div.childNodes;
	}
	jsn2obj(jsonString) {
		return JSON.parse(jsonString, function(key, value) {
			if (typeof value === "string" && value.startsWith("/function(") && value.endsWith(")/")) {
				value = value.substring(10, value.length - 2);
				return (0, eval)("(" + value + ")");
			}
			return value;
		});
	}
	obj2jsn(obj) {
		return JSON.stringify(obj, function(key, value) {
			if (typeof value === "function") {
				return "/Function(" + value.toString() + ")/";
			}
			return value;
		});
	}
	stringToDOM(str) {
		var container = document.createElement("div");
		container.innerHTML = str;
		return container.childNodes;
	}
}
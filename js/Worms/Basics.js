export default class Basics {
	constructor(config) {
		this.config = config;
		this.config.contentValue = true;
		this.is_disabled = false;
	}
	get disabled() {
		return this.is_disabled;
	}
	set disabled(state) {
		return this.is_disabled = state;
	}
	gen(count) {
		const chars = "abcdefghijklmnopqrstuvwxyz";
		let result = "";
		for (let i = 0; i < count; i++) {
		  const randomIndex = Math.floor(Math.random() * chars.length);
		  result += chars[randomIndex];
		}
		return result;
	}
	dom(str) {
		var div = document.createElement('div');
		div.innerHTML = str.trim();
		return div;
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
	release() {
		this.target.remove();
		delete this;
	}
}
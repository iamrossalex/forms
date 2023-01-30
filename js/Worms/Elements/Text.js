import Element from "../Element.js";

export default class Text extends Element {
	default = {
		config: {
			"id": "lt1",
			"type": "Layout",
			"data": {
				"title": "My form layout"
			},
			"attrs": {} // Element HTML attributes
		}
	};
	constructor() {
		super();
	}
}
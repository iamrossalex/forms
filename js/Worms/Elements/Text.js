import Basics from "../Basics.js";

export default class Text extends Basics {
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
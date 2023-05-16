import Basics from "../Basics.js";

export default class Expandable extends Basics {
	constructor(config) {
		super(config);
		this.config.contentValue = false;
	}
	render() {
		switch (this.config.layout) {
			case 11:
				var layout = "layout-1-1";
				break;
			case 12:
				var layout = "layout-1-2";
				break;
			case 21:
				var layout = "layout-2-1";
				break;
		}
		const nodes = this.dom(`<div class="worms--layouts ${layout ?? ''}"><div></div>${!layout ? '' : '<div></div>'}</div>`);
		this.object = nodes.querySelector('.worms--layouts');
		this.target = [...nodes.querySelectorAll('.worms--layouts > div')];
		return this;
	}
}
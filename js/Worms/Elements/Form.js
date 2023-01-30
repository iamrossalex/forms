import Element from "../Element.js";

export default class Form extends Element {
	constructor(config) {
		super(config);
	}
	render() {
		return `
			<form>
				${this.config.nodes}		
			</form>
		`;
		// return document.createElement('form');
	}
}
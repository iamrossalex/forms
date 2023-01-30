import Basics from "../Basics.js";

export default class Form extends Basics {
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
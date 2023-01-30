import Basics from "../Basics.js";

export default class Text extends Basics {
	constructor(config) {
		super(config);
	}
	render() {
		var nodes = this.dom(``);;
		return nodes.childNodes;
	}
}
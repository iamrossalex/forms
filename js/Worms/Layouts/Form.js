import Basics from "../Basics.js";

export default class Form extends Basics {
	constructor(config) {
		super(config);
	}
	render() {
		var nodes = this.dom(`<form></form>`);
		var el = nodes.querySelector('form');
		this.config.nodes.map(nodeList => {
			[...nodeList].map(node => {
				el.appendChild(node);
			})
		});
		return nodes.childNodes;
	}
}
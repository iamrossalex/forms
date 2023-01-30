import Basics from "../Basics.js";

export default class Columns extends Basics {
	constructor(config) {
		super(config);
	}
	render() {
		var nodes = '';
		switch (this.config.opts.layout) {
			case '1':
				var nodes = this.dom(`<div class="worms__elements-layouts layout-1"><div></div></div>`);
				var el = nodes.querySelector('.worms__elements-layouts > div:nth-child(1)');
				this.config.nodes.map(nodeList => {
					[...nodeList].map(node => {
						el.appendChild(node);
					})
				});
				break;
			case '11':
				nodes = this.dom(`<div class="worms__elements-layouts layout-1-1"><div></div><div></div></div>`);
				var el = nodes.querySelector('.worms__elements-layouts > div:nth-child(1)');
				this.config.nodes[0].map(nodeList => {
					[...nodeList].map(node => {
						el.appendChild(node);
					})
				});
				var el = nodes.querySelector('.worms__elements-layouts > div:nth-child(1)');
				this.config.nodes[1].map(nodeList => {
					[...nodeList].map(node => {
						el.appendChild(node);
					})
				});
				break;
		}
		return nodes.childNodes;
	}
}
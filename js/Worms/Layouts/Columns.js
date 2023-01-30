import Basics from "../Basics.js";

export default class Columns extends Basics {
	constructor(config) {
		super(config);
	}
	render() {
		var rendered = '';
		switch (this.config.opts.layout) {
			case '1':
				rendered = `<div class="worms__elements-layouts layout-1">
					<div>
						${this.config.nodes}
					</div>
				</div>`;
				break;
			case '11':
				rendered = `<div class="worms__elements-layouts layout-1-1">
					<div>
						${this.config.nodes[0]}
					</div>
					<div>
						${this.config.nodes[1]}
					</div>
				</div>`;
				break;
		}
		return rendered;
	}
}
import Element from "../Element.js";

export default class Layout extends Element {
	layouts = {
		"1": (el) => {
			return `<div class="worms__elements-layouts layout-1">
				<div>
					${el[0] ?? ''}
				</div>
			</div>`;
		},
		"11": (el) => {
			return `<div class="worms__elements-layouts layout-1-1">
				<div>
					${el[0] ?? ''}
				</div>
				<div>
					${el[1] ?? ''}
				</div>
			</div>`;
		}
	}
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
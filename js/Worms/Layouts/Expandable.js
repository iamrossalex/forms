import Basics from "../Basics.js";

export default class Expandable extends Basics {
	constructor(config) {
		super(config);
		this.config.contentValue = false;
	}
	render() {
		this.id = this.gen(4);
		const nodes = this.dom(`<div class="worms--expandable">
			<div class="worms--expandable-title">${this.config.title}</div>
			<div class="worms--expandable-list">
				<div class="worms--expandable-list-cont">
					<script type="text/html" id="${this.id}_template">

					</script>
					<div class="worms--expandable-list-item">
 
					</div>
				</div>
				<a href="" class="worms--expandable-list-new">+ New</a>
			</div>
		</div>`);
		this.object = nodes.querySelector('.worms--expandable');
		this.template = nodes.querySelector('#' + this.id + '_template');
		this.target = [...nodes.querySelectorAll('.worms--expandable .worms--expandable-list-cont')];
		return this;
	}
}
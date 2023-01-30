import Basics from "../Basics.js";

export default class Textarea extends Basics {
	render() {
		var nodes = this.dom(`<div class="worms text" data-wormfield="${this.config.name ?? ''}"><label for="">${this.config.data.title ?? ''}</label><textarea placeholder="${this.config.data.placeholder}">${this.config.data.value}</textarea></div>`);
		this.target = nodes.querySelector(".worms textarea");
		nodes.querySelector(".worms").val = (newValue = null) => {
			if (newValue) 
				this.target.value = newValue.toString();
			else
				return this.target.value;
		}
		nodes.querySelector(".worms").o = this;
		nodes.querySelector(".worms").disabled = (newValue = null) => {
			if (newValue) 
				this.disabled = newValue;
			else
				return this.disabled ?? false;
		}
		this.disabled = false;
		return [this, nodes.childNodes];
	}
}
import Basics from "../Basics.js";

export default class Text extends Basics {
	render() {
		var nodes = this.dom(`<div class="worms text" data-wormfield="${this.config.name ?? ''}"><label for="">${this.config.data.title ?? ''}</label><input type="text" placeholder="${this.config.data.placeholder}" value="${this.config.data.value}"></div>`);
		this.target = nodes.querySelector(".worms input");
		nodes.querySelector(".worms").val = (newValue = null) => {
			if (newValue) 
				this.target.value = newValue.toString();
			else
				return this.target.value;
		}
		nodes.querySelector(".worms").disabled = (newValue = null) => {
			if (newValue) 
				this.disabled = newValue;
			else
				return this.disabled ?? false;
		}
		nodes.querySelector(".worms").o = this;
		this.disabled = false;
		return [this, nodes.childNodes];
	}
}
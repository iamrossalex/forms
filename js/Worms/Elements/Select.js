import Basics from "../Basics.js";

export default class Select extends Basics {
	render() {
		var nodes = this.dom(`<div class="worms select" data-wormfield="${this.config.name ?? ''}"><label for="">${this.config.data.title ?? ''}</label><select><option value="">${this.config.data.empty ?? ''}</option>${this.values(this.config.data.values)}</select><div class="select_arrow"></div></div>`);
		this.target = nodes.querySelector(".worms select");
		nodes.querySelector(".worms").val = (newValue = null) => {
			if (newValue)
				this.target.value = this.values(newValue);
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
	values(list) {
		return list.map(v => {return `<option value="${v.value}"${v.value == this.config.data.default ? ' selected' : ''}>${v.title}</option>`;}).join('')
	}
}
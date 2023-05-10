import Basics from "../Basics.js";

export default class Selectable extends Basics {
	constructor(config) {
		super(config);
	}
	render() {
		this.id = this.gen(4);
		var template = `
			<div class="worms--elements worms--elements-selectable ${this.config.required ? 'required' : ''}">
				<label class="worms--elements-selectable-label">${this.config.title}</label>
				<div class="worms--elements-selectable-container" id="${this.id}">
					${this.config.values.map(v => {
						return `<label class="worms--elements-selectable-item ${this.config.mode ?? 'checkbox'}">${v.title ?? v.value}<input type="${this.config.mode ?? 'checkbox'}" name="${this.config.name}" value="${v.value}" ${v.checked ? 'checked' : ''} /><div class="worms--elements-selectable-item-indicator"></div></label>`;
					}).join('')}
				</div>
				<div class="worms--elements-selectable-error"></div>
			</div>
		`;
		const nodes = this.dom(template);
		this.object = nodes.querySelector(".worms--elements");
		if (this.config.events) for (const key in this.config.events) {
			if (this.config.events.hasOwnProperty(key)) {
				this.object.querySelector('#'+this.id).addEventListener(key, this.config.events[key]);
			}
		}
		return this;
	}
	state(value, state = true) {
		this.object.querySelector('#'+this.id + ' input[value="'+value+'"]').checked = state;
	}
	async retrive() {
		return [...this.object.querySelectorAll('#'+this.id + ' input:checked')].map(i => {
			return i.value;
		});
	}
	async load(values) {
		this.object.querySelector('#'+this.id).innerHTML = `
			${values.map(v => {
				return `<label class="worms--elements-selectable-item ${this.config.mode ?? 'checkbox'}">${v.title ?? v.value}<input type="${this.config.mode ?? 'checkbox'}" name="${this.config.name}" value="${v.value}" ${v.checked ? 'checked' : ''} /><div class="worms--elements-selectable-item-indicator"></div></label>`;
			}).join('')}
		`;
	}
}
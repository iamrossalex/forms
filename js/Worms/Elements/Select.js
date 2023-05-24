import Basics from "../Basics.js";

export default class Select extends Basics {
	constructor(config) {
		super(config);
	}
	render() {
		this.id = this.gen(4);
		var template = `
			<div class="worms--elements worms--elements-select ${this.config.required ? 'required' : ''}>
				<label class="worms--elements-select-label" for="${this.id}">${this.config.title ?? this.id}</label>
				<div class="worms--elements-select-container">
					${this.config.glifLeft ? `<div class="worms--elements-text-container-glif left"><img src="` + this.config.glifLeft + `" alt=""></div>` : ''}
					<select name="" id="${this.id}">
						<option value="">-- ${this.config.placeholder ?? 'Select'} --</option>

						${(() => {
							if (this.config.dependency) {
								
							} else {
								return this.config.values.map(v => {
									if (v.label) {
										return `<optgroup label="${v.label}">${v.values.map(gv => {
											return `<option value="${gv.value}" ${v.checked ? 'selected' : ''}>${gv.title ?? gv.value}</option>`;
										}).join('')}</optgroup>`;
									} else {
										if (v.value) return `<option value="${v.value}" ${v.checked ? 'selected' : ''}>${v.title ?? v.value}</option>`;
									}
								}).join('')							
							}
						})()}

					</select>
					<div class="worms--elements-select-indicator"></div>
				</div>
				<div class="worms--elements-select-error"></div>
			</div>
		`;
		const nodes = this.dom(template);
		this.object = nodes.querySelector(".worms--elements");
		if (this.config.events) for (const key in this.config.events) {
			if (this.config.events.hasOwnProperty(key)) {
				this.object.querySelector('#'+this.id).addEventListener(key, this.config.events[key]);
			}
		}
		if (this.config.dependency) {
			this.disabled = true;
		}
		return this;
	}
	state(v) {
		this.object.querySelector('#'+this.id).value = v;
	}
	async retrive() {
		return this.object.querySelector('#'+this.id).value;
	}
	async load(values) {
		this.object.querySelector('#'+this.id).innerHTML = `
			<option value="">-- ${this.config.placeholder ?? 'Select'} --</option>
			${values.map(v => {
				if (v.label) {
					return `<optgroup label="${v.label}">${v.values.map(gv => {
						return `<option value="${gv.value}">${gv.title ?? gv.value}</option>`;
					}).join('')}</optgroup>`;
				} else {
					if (v.value) return `<option value="${v.value}">${v.title ?? v.value}</option>`;
				}
			}).join('')}
		`;
	}
}
import Basics from "../Basics.js";

export default class Select extends Basics {
	constructor(config) {
		super(config);
		this.loading = false;
		this.changes = [];
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
		var _this = this;
		nodes.querySelector("#"+this.id).addEventListener('change', () => {_this.changed(_this)});
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
	setChange(func) {
		this.changes.push(func);
		return this.changes.length - 1;
	}
	unsetChange(funcId) {
		if (!this.changes[funcId]) return false;
		this.changes.splice(funcId, 1);
		return true;
	}
	async changed(obj) {
		if (this.changes.length > 0) for(let i in this.changes) {
			this.changes[i]();
		}
	}
	async load(values) {
		if (values == null) return;
		this.loading = true;
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
		this.loading = false;
		this.disabled = false;
	}
}
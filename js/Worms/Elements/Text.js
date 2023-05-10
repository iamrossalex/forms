import Basics from "../Basics.js";

export default class Text extends Basics {
	constructor(config) {
		super(config);
	}
	render() {
		this.id = this.gen(4);
		switch(this.config.mode ?? 'text') {
			case 'text':
				var template = `
					<div class="worms--elements worms--elements-text ${this.config.required ? 'required' : ''}>
						<label class="worms--elements-text-label" for="${this.id}">${this.config.title ?? this.id}</label>
						<div class="worms--elements-text-container">
							${this.config.glifLeft ? `<div class="worms--elements-text-container-glif left"><img src="` + this.config.glifLeft + `" alt=""></div>` : ''}
							${this.config.glifRight ? `<div class="worms--elements-text-container-glif right"><img src="` + this.config.glifRight + `" alt=""></div>` : ''}
							<input id="${this.id}" type="text" placeholder="${this.config.placeholder ?? ''}" value="${this.config.value ?? ''}">
						</div>
						<div class="worms--elements-text-error"></div>
					</div>
				`;
				break;
			case 'email':
				var template = `
					<div class="worms--elements worms--elements-text ${this.config.required ? 'required' : ''}>
						<label class="worms--elements-text-label" for="${this.id}">${this.config.title ?? this.id}</label>
						<div class="worms--elements-text-container">
							${this.config.glifLeft ? `<div class="worms--elements-text-container-glif left"><img src="` + this.config.glifLeft + `" alt=""></div>` : ''}
							${this.config.glifRight ? `<div class="worms--elements-text-container-glif right"><img src="` + this.config.glifRight + `" alt=""></div>` : ''}
							<input id="${this.id}" type="email" placeholder="${this.config.placeholder ?? ''}" value="${this.config.value ?? ''}">
						</div>
						<div class="worms--elements-text-error"></div>
					</div>
				`;
				break;
			case 'date':
				var template = `
					<div class="worms--elements worms--elements-text ${this.config.required ? 'required' : ''}>
						<label class="worms--elements-text-label" for="${this.id}">${this.config.title ?? this.id}</label>
						<div class="worms--elements-text-container">
							${this.config.glifLeft ? `<div class="worms--elements-text-container-glif left"><img src="` + this.config.glifLeft + `" alt=""></div>` : ''}
							${this.config.glifRight ? `<div class="worms--elements-text-container-glif right"><img src="` + this.config.glifRight + `" alt=""></div>` : ''}
							<input id="${this.id}" type="date" placeholder="${this.config.placeholder ?? ''}" value="${this.config.value ?? ''}">
						</div>
						<div class="worms--elements-text-error"></div>
					</div>
				`;
				break;
			case 'password':
				var template = `
					<div class="worms--elements worms--elements-text ${this.config.required ? 'required' : ''}>
						<label class="worms--elements-text-label" for="${this.id}">${this.config.title ?? this.id}</label>
						<div class="worms--elements-text-container">
							${this.config.glifLeft ? `<div class="worms--elements-text-container-glif left"><img src="` + this.config.glifLeft + `" alt=""></div>` : ''}
							${this.config.glifRight ? `<div class="worms--elements-text-container-glif right"><img src="` + this.config.glifRight + `" alt=""></div>` : ''}
							<input id="${this.id}" type="password" placeholder="${this.config.placeholder ?? ''}" value="${this.config.value ?? ''}">
						</div>
						<div class="worms--elements-text-error"></div>
					</div>
				`;
				break;
			case 'textarea':
				var template = `
					<div class="worms--elements worms--elements-text ${this.config.required ? 'required' : ''}>
						<label class="worms--elements-text-label" for="${this.id}">${this.config.title ?? this.id}</label>
						<div class="worms--elements-text-container">
							${this.config.glifLeft ? `<div class="worms--elements-text-container-glif left"><img src="` + this.config.glifLeft + `" alt=""></div>` : ''}
							${this.config.glifRight ? `<div class="worms--elements-text-container-glif right"><img src="` + this.config.glifRight + `" alt=""></div>` : ''}
							<textarea id="${this.id}" placeholder="${this.config.placeholder ?? ''}">${this.config.value ?? ''}</textarea>
						</div>
						<div class="worms--elements-text-error"></div>
					</div>
				`;
				break;
		}
		const nodes = this.dom(template);
		this.object = nodes.querySelector(".worms--elements");
		if (this.config.events) for (const key in this.config.events) {
			if (this.config.events.hasOwnProperty(key)) {
				this.object.querySelector('#'+this.id).addEventListener(key, this.config.events[key]);
			}
		}
		return this;
	}
	async retrive() {
		return this.object.querySelector('#'+this.id).value;
	}
	async load(v) {
		this.object.querySelector('#'+this.id).value = v;
	}
}
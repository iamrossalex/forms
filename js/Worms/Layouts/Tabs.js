import Basics from "../Basics.js";

export default class Tabs extends Basics {
	constructor(config) {
		super(config);
		this.config.contentValue = false;
	}
	render() {
		const nodes = this.dom(`
			<div class="worms--tabs">
				<div class="worms--tabs-labels">
					${this.config.labels.map((label, i) => {
						return `<label class="worms--tabs-label">${label ?? i}</label>`;
					}).join('')}
				</div>
				<div class="worms--tabs-items">	
					${this.config.labels.map(() => {
						return `<div class="worms--tabs-item"></div>`;
					}).join('')}
				</div>
			</div>
		`);
		this.object = nodes.querySelector('.worms--tabs');
		this.target = [...nodes.querySelectorAll('.worms--tabs-item')];

		[...nodes.querySelectorAll('.worms--tabs-label')].map((label, i) => {
			label.addEventListener('click', ev => {
				ev.preventDefault();
				if (ev.currentTarget.classList.contains('active')) return;
				let active = this.object.querySelector('.worms--tabs-label.active');
				if (active) {
					active.classList.remove('active');
					let ind = Array.prototype.indexOf.call(active.closest('.worms--tabs-labels').children, active);
					this.target[ind].classList.remove('active');
				}
				ev.currentTarget.classList.add('active');
				let ind = Array.prototype.indexOf.call(ev.currentTarget.closest('.worms--tabs-labels').children, ev.currentTarget);
				this.target[ind].classList.add('active');
			});
		});
		nodes.querySelector('.worms--tabs-label:nth-child(1)').click();
		return this;
	}
}
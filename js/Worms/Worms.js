import Basics from "./Basics.js";
import Layouts from "./Layouts/Layouts.js";
import Expandable from "./Layouts/Expandable.js";
import Tabs from "./Layouts/Tabs.js";
import Text from "./Elements/Text.js";
import Editor from "./Elements/Editor.js";
import Select from "./Elements/Select.js";
import Selectable from "./Elements/Selectable.js";
import Images from "./Elements/Images.js";

export class Worms {
	constructor(form) {
		this.config = form;
	}
	render() {
		this.elements = {};
		this.layouts = {};
		this.target = document.querySelector(this.config.target);
		this.renderNodes(this.target);
		this.postRender();
		return this; //
	}
	renderNodes(target = null, cfg = null) {
		var _this = this;
		const conf = cfg ?? this.config;

		if (cfg) {
			const elType = eval(conf.type);
			var obj = new elType(conf);
			if (obj.config.contentValue) this.elements[conf.name] = obj; else this.layouts[conf.name] = obj;
			obj.render();
			target.append(obj.object);
			if (obj.afterRender) obj.afterRender();
		}
		
		if (conf.nodes) {
			if (Array.isArray(conf.nodes[0])) {
				for(let i=0; i<conf.nodes.length; i++) {
					[...conf.nodes[i]].map(node => {
						_this.renderNodes(obj?.target[i] ?? this.target, node);
					});
				}
			} else {
				[...conf.nodes].map(node => {
					_this.renderNodes(obj?.target[0] ?? this.target, node);
				});
			}
		}
	}
	postRender() {
		for (const key in this.elements) {
			if (this.elements[key].postRender) {
				this.elements[key].postRender();
			}
		}
	}
	async retrive() {
		var result = {};
		for (const key in this.elements) {
			result[key] = await this.elements[key].retrive();
		}
		return result;
	}
	submit() {
		if (this.config.events.submit) this.config.events.submit(this.retrive());
	}
}
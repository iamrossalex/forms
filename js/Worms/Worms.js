import Basics from "./Basics.js";

import Form from "./Layouts/Form.js";
// import Accordion from "./Elements/Accordion.js";
import Column from "./Layouts/Column.js";
// import Steps from "./Elements/Steps.js";
// import Tabs from "./Elements/Tabs.js";
// import Group from "./Elements/Group.js";

// import Text from "./Elements/Text.js";
// import Number from "./Elements/Number.js";
// import Hidden from "./Elements/Hidden.js";

// import Check from "./Elements/Check.js";
// import Select from "./Elements/Select.js";
// import Radio from "./Elements/Radio.js";
// import Thumbler from "./Elements/Thumbler.js";
// import Buttons from "./Elements/Buttons.js";

// import Dates from "./Elements/Dates.js";

// import File from "./Elements/File.js";
// import Image from "./Elements/Image.js";

// import Range from "./Elements/Range.js";
// import Tags from "./Elements/Tags.js";
// import Map from "./Elements/Tags.js";

/**
 * 1. Получить конфигурации форм
 * 2. Создать идентификатор формы в пуле форм Worms
 * 3. Построить поля и добавить в target контейнер формы, добавить события/обработчики
 * 4. Добавить события и обработчики форме
 * 5. Вставить форму в target
 */

/**
 * 1. Text
 * 2. Layout
 * 3. Select
 * 4. Check
 * 5. Radio
 * 6. HTML
 * 7. Code
 */

export class Worms {
	forms = {};
	constructor(forms) {
		forms.map((form => {
			this.create(form);
		}));
	}
	create(form) {
		this.forms[form['name']] = form;
		this.forms[form['name']].isRendered = false;
		this.forms[form['name']].target = document.querySelector(this.forms[form['name']].target);
		this.forms[form['name']].target.append(...this.render(this.forms[form['name']]));
	}
	render(el) {
		if (el.nodes.length > 0) {
			if(Array.isArray(el.nodes[0])) {
				var nodes = [];
				for(let i=0; i<el.nodes.length;i++) {
					nodes[i] = el.nodes[i].map((node => {
						return this.render(node);
					}));
				}
				el.nodes = nodes;
				console.log(el.nodes);
			} else {
				el.nodes = el.nodes.map((node => {
					return this.render(node);
				}));
			}
		}

		const elType = eval(el.type);
		let elem = new elType(el).render();
		return elem;
	}
}
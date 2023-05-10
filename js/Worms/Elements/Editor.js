/**
 * Docs:
 * https://editorjs.io/base-concepts/
 * 
 * All plugins
 * https://github.com/editor-js/awesome-editorjs
 */
import Basics from "../Basics.js";

export default class Editor extends Basics {
	constructor(config) {
		super(config);
	}
	render() {
		this.id = this.gen(4);
		var template = `
			<div class="worms--elements-editorjs ${this.config.required ? 'required' : ''}">
				<label class="worms--elements-editorjs-label" for="${this.id}">${this.config.title ?? this.id}</label>
				<div id="${this.id}" class="worms--elements-editorjs-container"></div>
				<div class="worms--elements-editorjs-error">What a fuck is this?</div>
			</div>
		`;
		const nodes = this.dom(template);
		this.object = nodes.querySelector(".worms--elements-editorjs");
		return this;
	}
	async retrive() {
		const output = await this.editor.save();
		return await output.blocks.map(block => {
			switch (block.type) {
				case "header":
					return `<h${block.data.level} data-type="${block.type}">${block.data.text}</h${block.data.level}>`
				case "paragraph":
					return `<p data-type="${block.type}">${(block.data.text)}</p>`
				case "image":
					return `<img data-type="${block.type}" src="${block.data.file.url}" class="${!block.data.stretched ?? 'block'}" alt="${block.data.caption}">`
				case "raw":
					return `<div data-type="${block.type}">${block.data.html}</div>`;
				case "list":
					return `<${block.data.style == 'ordered' ? 'ol' : 'ul'} data-type="${block.type}">${block.data.items.map(i => {return `<li>${i}</li>`;}).join('')}</${block.data.style == 'ordered' ? 'ol' : 'ul'}>`;
				case "quote":
					return `<blockquote data-type="${block.type}" cite="${block.data.caption ?? ''}">${block.data.text}</blockquote>`
				case "table":
					return `<table data-type="${block.type}" width="100%">${block.data.content.map(tr => {
						return `<tr>${tr.map(td => {
							return `<td>${td}</td>`;
						}).join('')}</tr>`;
					}).join('')}</table>`;
				case "code":
					return `<pre data-type="${block.type}"><code>${block.data.code}</code></pre>`;
			}
		}).join('').replace(/\\(.)/g, function(match, char) {
			switch (char) {
				case 'n':
					return "\n";
				case 't':
					return "\t";
				case '\\':
					return "\\";
				default:
					return char;
			}
		});
	}
	html2blocks(html) {
		var dom = this.dom(html);
		const blocks = [...dom.children].map(item => {
			switch (item.getAttribute('data-type')) {
				case "header":
					var block = {
						id: this.gen(10),
						type: item.getAttribute('data-type'),
						data: {
							text: item.innerHTML,
							level: item.nodeName.replace(/[^0-9]/g, '')
						}
					};
					break;
				case "paragraph":
					var block = {
						id: this.gen(10),
						type: item.getAttribute('data-type'),
						data: {
							text: item.innerHTML,
						}
					};
					break;
				case "image":
					var block = {
						id: this.gen(10),
						type: item.getAttribute('data-type'),
						data: {
							file: {
								url: item.getAttribute('src')
							},
							caption: item.getAttribute('alt') ?? '',
							withBorder: false,
							withBackground: false,
							stretched: true
						}
					};
					break;
				case "raw":
					var block = {
						id: this.gen(10),
						type: item.getAttribute('data-type'),
						data: {
							html: item.innerHTML ?? ''
						}
					};
					break;
				case "list":
					var block = {
						id: this.gen(10),
						type: item.getAttribute('data-type'),
						data: {
							style: item.tagName == 'UL' ? 'unordered' : 'ordered',
							items: [...item.querySelectorAll('li')].map(li => {return li.innerHTML;})
						}
					};
					break;
				case "quote":
					var block = {
						id: this.gen(10),
						type: item.getAttribute('data-type'),
						data: {
							text: item.innerHTML ?? '',
							caption: item.getAttribute('cite') ?? '',
							alignment: "left"
						}
					};
					break;
				case "table":
					var block = {
						id: this.gen(10),
						type: item.getAttribute('data-type'),
						data: {
							content: [...item.querySelectorAll('tr')].map(tr => {return [...tr.querySelectorAll('td')].map(td => {return td.innerHTML;});})
						}
					};
					break;
				case "code":
					var block = {
						id: this.gen(10),
						type: item.getAttribute('data-type'),
						data: {
							code: item.querySelector('code').innerHTML ?? ''
						}
					};
					break;
			}
			return block;
		});
		return blocks;
	}
	async load(blocks) {
		// HTML to Object
		const ejsBlocks = {
			"time": Date.now(),
			"blocks": blocks,
			"version": "2.25.0"
		};
		this.editor.clear();
		this.editor.blocks.render(ejsBlocks);
	}
	async postRender() {
		this.editor = await new EditorJS({
			holder: this.id,
			placeholder: this.config.paceholder ?? '',
			tools: {
				header: Header,
				linkTool: LinkTool,
				raw: RawTool,
				image: {
					class: ImageTool,
					config: {
						endpoints: {
							byFile: '/uploadFile.php',
							byUrl: '/fetchUrl.php',
						}
					},
				},
				list: List,
				embed: Embed,
				quote: Quote,
				table: Table,
				code: CodeTool
			},
			data: this.config.value && this.config.value != '' ? {
				"time": Date.now(),
				"blocks": this.html2blocks(this.config.value),
				"version": "2.25.0"
			} : {}
		});
	}
}
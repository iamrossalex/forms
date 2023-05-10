/**
 * - Add resize Image
 * 
 */
import Basics from "../Basics.js";
export default class Images extends Basics {
	constructor(config) {
		super(config);
	}
	render() {
		var _this = this;
		this.id = this.gen(4);
		var template = `
			<div class="worms--elements-image ${this.config.required ? 'required' : ''}">
				<label class="worms--elements-image-label">${this.config.title ?? this.id}</label>
				<div class="worms--elements-image-container">
					<div class="worms--elements-image-list">
						<div class="worms--elements-image-items" id="${this.id}">${this.config.values.map(v => {
							return `<div class="worms--elements-image-item">
								<div><img src="${v}" alt=""></div>
								<div>
									<a href="" title="Shift left"><svg version="1.1" x="0px" y="0px" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(15.384586, 0, 0, 15.384586, -269.229279, -14919.992187)"><path d="m 24.000068,1002.3634 c 0.016,0.6142 0.2007,0.9844 0.4375,1.25 l 13,16.0001 c 0.6141,0.8657 2.0056,1.0027 2.8756,0.2997 0.87,-0.703 0.9162,-2.0175 0.2182,-2.7997 l -10.3438,-12.7501 43.81248,0 c 1.1046,0 2,-0.8954 2,-2 0,-1.1046 -0.8954,-2 -2,-2 l -43.81248,0 10.3438,-12.74997 c 0.7917,-0.79 0.5667,-2.1759 -0.269,-2.9193 -0.6434,-0.5722 -2.358,-0.3899 -2.8248,0.4193 l -13,15.99997 c -0.3385,0.4144 -0.4416,0.7226 -0.4375,1.25 z" style="text-indent:0;text-transform:none;direction:ltr;block-progression:tb;baseline-shift:baseline;enable-background:accumulate;" fill-opacity="1" stroke="none" marker="none" visibility="visible" display="inline" overflow="visible"/></g></svg></a>
									<a href="" title="Delete image"><svg version="1.1" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(2, 0, 0, 2, -7, -12)"><g><path d="M368,456H144c-13.233,0-24-10.767-24-24V192h16v240c0,4.411,3.589,8,8,8h224c4.411,0,8-3.589,8-8l0-240h16v240    C392,445.233,381.233,456,368,456z"/></g></g><g transform="matrix(2, 0, 0, 2, -7, -12)"><g><rect x="248" y="224" width="16" height="160"/></g></g><g transform="matrix(2, 0, 0, 2, -7, -12)"><g><rect x="184" y="224" width="16" height="160"/></g></g><g transform="matrix(2, 0, 0, 2, -7, -12)"><g><rect x="312" y="224" width="16" height="160"/></g></g><g transform="matrix(2, 0, 0, 2, -7, -12)"><g><path d="M424,168H88V88h96V56h144v32h96V168z M104,152h304v-48h-96V72H200v32h-96V152z"/></g></g></svg></a>
									<a href="" title="Shift right"><svg version="1.1" x="0px" y="0px" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(15.384593, 0, 0, 15.384593, -269.229645, -14919.998047)"><path d="m 75.999921,1002.3609 c -0.0157,-0.6142 -0.20069,-0.9844 -0.4375,-1.25 l -13,-16.00004 c -0.61409,-0.86575 -2.00559,-1.00275 -2.87559,-0.29974 -0.87,0.70301 -0.9162,2.01748 -0.2182,2.79974 l 10.34379,12.75004 -43.81246,0 c -1.1046,0 -2,0.8954 -2,2 0,1.1046 0.8954,2 2,2 l 43.81246,0 -10.34379,12.75 c -0.7917,0.79 -0.5667,2.1759 0.269,2.9193 0.6434,0.5722 2.358,0.3899 2.82479,-0.4193 l 13,-16 c 0.33855,-0.4144 0.44162,-0.7226 0.4375,-1.25 z" style="text-indent:0;text-transform:none;direction:ltr;block-progression:tb;baseline-shift:baseline;enable-background:accumulate;" fill-opacity="1" stroke="none" marker="none" visibility="visible" display="inline" overflow="visible"/></g></svg></a>
								</div>
							</div>`;}).join('')}</div>
						<label class="worms--elements-image-dropzone">
							<input type="file" size="" accept="" id="file_${this.id}" multiple>
							<div>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" x="0px" y="0px"><path d="M22,12a1,1,0,0,0-1,1v7H3V13a1,1,0,0,0-2,0v8a1,1,0,0,0,1,1H22a1,1,0,0,0,1-1V13A1,1,0,0,0,22,12Z"></path><path d="M12,18a1,1,0,0,0,1-1V5.414l2.293,2.293a1,1,0,0,0,1.414-1.414l-4-4a1,1,0,0,0-1.414,0l-4,4A1,1,0,1,0,8.707,7.707L11,5.414V17A1,1,0,0,0,12,18Z"></path></svg>
								<div>image/jpeg;image/png</div>
							</div>
						</label>
					</div>
					<div class="worms--elements-image-nav">
						<div><a href="" title="Slide left"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 55.266 100" enable-background="new 0 0 55.266 100" xml:space="preserve"><path d="M49.995,100c-1.349,0-2.697-0.515-3.727-1.544L1.544,53.727c-2.059-2.059-2.059-5.395,0-7.454L46.268,1.544  c2.059-2.059,5.395-2.059,7.454,0c2.059,2.059,2.059,5.395,0,7.454L12.725,50l40.997,41.002c2.059,2.059,2.059,5.395,0,7.454  C52.692,99.485,51.344,100,49.995,100z"></path></svg></a></div>
						<div><label for="file_${this.id}"><svg class="icon" viewBox="0 0 1000 1000" version="1.1" x="0px" y="0px" xmlns="http://www.w3.org/2000/svg"><path d="M 899.999 550 L 549.999 550 L 549.999 900 L 449.999 900 L 449.999 550 L 100 550 L 100 450.005 L 450 450.005 L 450 100 L 550 100 L 550 450.005 L 900 450.005 L 900 550 Z"/></svg></label></div>
						<div><a href="" title="Slide right"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 55.271 100" enable-background="new 0 0 55.271 100" xml:space="preserve"><path d="M5.271,100c-1.349,0-2.697-0.515-3.727-1.544c-2.059-2.059-2.059-5.395,0-7.454L42.546,50L1.544,8.998  c-2.059-2.059-2.059-5.395,0-7.454s5.395-2.059,7.454,0l44.729,44.729c2.059,2.059,2.059,5.395,0,7.454L8.998,98.456  C7.969,99.485,6.62,100,5.271,100z"></path></svg></a></div>
					</div>
				</div>
				<div class="worms--elements-image-error"></div>
			</div>
		`;
		const nodes = this.dom(template);
		this.object = nodes.querySelector(".worms--elements-image");
		nodes.querySelector(".worms--elements-image-list").addEventListener('dragenter', (ev) => {
			ev.currentTarget.querySelector('.worms--elements-image-dropzone').classList.add('show');
		}, false);
		nodes.querySelector(".worms--elements-image-dropzone").addEventListener('dragleave', (ev) => {
			if (ev.target !== ev.currentTarget && ev.currentTarget.contains(ev.target)) return;
			ev.currentTarget.classList.remove('show');
		}, false);
		nodes.querySelector(".worms--elements-image-dropzone").addEventListener('dragover', (ev) => {ev.preventDefault();});
		nodes.querySelector(".worms--elements-image-dropzone").addEventListener('drop', (ev) => {
			ev.preventDefault();
			ev.currentTarget.classList.remove('show');
			if (ev.dataTransfer.items.length > 0) {
				for (var i = 0;i < ev.dataTransfer.items.length; i++) {
					var item = ev.dataTransfer.items[i];
					if ((item.kind == 'string') && (item.type.match('^text/uri-list'))) {
						// скачать картинку javascript может, нужно загрузить ее в объект Image
						item.getAsString(s => {
							_this.processImage(s, null, _this.config.width ?? null, _this.config.height ?? null);
						});
					} else if ((item.kind == 'file') && (item.type.match('^image/'))) {
						var f = item.getAsFile();
						var reader = new FileReader();
						reader.onload = function (event) {
							_this.processImage(event.target.result, event.target.fileInfo.type, _this.config.width ?? null, _this.config.height ?? null);
						}
						reader.fileInfo = {
							name: f.name,
							size: f.size,
							type: f.type
						}
						reader.readAsDataURL(f);
					}
				}
			}
		}, false);
		nodes.querySelector('#file_'+this.id).addEventListener('change', function(e) {
			var target = e.target ? e.target : e.srcElement;
			var files = target.files;
			for(var i=0;i<files.length;i++) {
				var file = files[i],
					reader = new FileReader();
				reader.onload = function (event) {
					_this.processImage(event.target.result, event.target.fileInfo.type, _this.config.width ?? null, _this.config.height ?? null);
				}
				reader.fileInfo = {
					name: file.name,
					size: file.size,
					type: file.type
				}
				reader.readAsDataURL(file);
			}
		});
		if (this.config.events) for (const key in this.config.events) {
			if (this.config.events.hasOwnProperty(key)) {
				this.object.querySelector('#'+this.id).addEventListener(key, this.config.events[key]);
			}
		}
		return this;
	}
	async retrive() {
		var results = await [...this.object.querySelectorAll('.worms--elements-image-item img')].map(img => {
			return img.src;
		});
		return results;
	}
	async load(values) {
		this.object.querySelector('#'+this.id).innerHTML = values.map(v => {
			return `<div class="worms--elements-image-item">
				<div><img src="${v}" alt=""></div>
				<div>
					<a href="" title="Shift left"><svg version="1.1" x="0px" y="0px" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(15.384586, 0, 0, 15.384586, -269.229279, -14919.992187)"><path d="m 24.000068,1002.3634 c 0.016,0.6142 0.2007,0.9844 0.4375,1.25 l 13,16.0001 c 0.6141,0.8657 2.0056,1.0027 2.8756,0.2997 0.87,-0.703 0.9162,-2.0175 0.2182,-2.7997 l -10.3438,-12.7501 43.81248,0 c 1.1046,0 2,-0.8954 2,-2 0,-1.1046 -0.8954,-2 -2,-2 l -43.81248,0 10.3438,-12.74997 c 0.7917,-0.79 0.5667,-2.1759 -0.269,-2.9193 -0.6434,-0.5722 -2.358,-0.3899 -2.8248,0.4193 l -13,15.99997 c -0.3385,0.4144 -0.4416,0.7226 -0.4375,1.25 z" style="text-indent:0;text-transform:none;direction:ltr;block-progression:tb;baseline-shift:baseline;enable-background:accumulate;" fill-opacity="1" stroke="none" marker="none" visibility="visible" display="inline" overflow="visible"/></g></svg></a>
					<a href="" title="Delete image"><svg version="1.1" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(2, 0, 0, 2, -7, -12)"><g><path d="M368,456H144c-13.233,0-24-10.767-24-24V192h16v240c0,4.411,3.589,8,8,8h224c4.411,0,8-3.589,8-8l0-240h16v240    C392,445.233,381.233,456,368,456z"/></g></g><g transform="matrix(2, 0, 0, 2, -7, -12)"><g><rect x="248" y="224" width="16" height="160"/></g></g><g transform="matrix(2, 0, 0, 2, -7, -12)"><g><rect x="184" y="224" width="16" height="160"/></g></g><g transform="matrix(2, 0, 0, 2, -7, -12)"><g><rect x="312" y="224" width="16" height="160"/></g></g><g transform="matrix(2, 0, 0, 2, -7, -12)"><g><path d="M424,168H88V88h96V56h144v32h96V168z M104,152h304v-48h-96V72H200v32h-96V152z"/></g></g></svg></a>
					<a href="" title="Shift right"><svg version="1.1" x="0px" y="0px" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(15.384593, 0, 0, 15.384593, -269.229645, -14919.998047)"><path d="m 75.999921,1002.3609 c -0.0157,-0.6142 -0.20069,-0.9844 -0.4375,-1.25 l -13,-16.00004 c -0.61409,-0.86575 -2.00559,-1.00275 -2.87559,-0.29974 -0.87,0.70301 -0.9162,2.01748 -0.2182,2.79974 l 10.34379,12.75004 -43.81246,0 c -1.1046,0 -2,0.8954 -2,2 0,1.1046 0.8954,2 2,2 l 43.81246,0 -10.34379,12.75 c -0.7917,0.79 -0.5667,2.1759 0.269,2.9193 0.6434,0.5722 2.358,0.3899 2.82479,-0.4193 l 13,-16 c 0.33855,-0.4144 0.44162,-0.7226 0.4375,-1.25 z" style="text-indent:0;text-transform:none;direction:ltr;block-progression:tb;baseline-shift:baseline;enable-background:accumulate;" fill-opacity="1" stroke="none" marker="none" visibility="visible" display="inline" overflow="visible"/></g></svg></a>
				</div>
			</div>`;
		}).join('');
	}
	async add(value) {
		this.object.querySelector('#'+this.id).innerHTML += `<div class="worms--elements-image-item">
				<div><img src="${value}" alt=""></div>
				<div>
					<a href="" title="Shift left"><svg version="1.1" x="0px" y="0px" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(15.384586, 0, 0, 15.384586, -269.229279, -14919.992187)"><path d="m 24.000068,1002.3634 c 0.016,0.6142 0.2007,0.9844 0.4375,1.25 l 13,16.0001 c 0.6141,0.8657 2.0056,1.0027 2.8756,0.2997 0.87,-0.703 0.9162,-2.0175 0.2182,-2.7997 l -10.3438,-12.7501 43.81248,0 c 1.1046,0 2,-0.8954 2,-2 0,-1.1046 -0.8954,-2 -2,-2 l -43.81248,0 10.3438,-12.74997 c 0.7917,-0.79 0.5667,-2.1759 -0.269,-2.9193 -0.6434,-0.5722 -2.358,-0.3899 -2.8248,0.4193 l -13,15.99997 c -0.3385,0.4144 -0.4416,0.7226 -0.4375,1.25 z" style="text-indent:0;text-transform:none;direction:ltr;block-progression:tb;baseline-shift:baseline;enable-background:accumulate;" fill-opacity="1" stroke="none" marker="none" visibility="visible" display="inline" overflow="visible"/></g></svg></a>
					<a href="" title="Delete image"><svg version="1.1" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(2, 0, 0, 2, -7, -12)"><g><path d="M368,456H144c-13.233,0-24-10.767-24-24V192h16v240c0,4.411,3.589,8,8,8h224c4.411,0,8-3.589,8-8l0-240h16v240    C392,445.233,381.233,456,368,456z"/></g></g><g transform="matrix(2, 0, 0, 2, -7, -12)"><g><rect x="248" y="224" width="16" height="160"/></g></g><g transform="matrix(2, 0, 0, 2, -7, -12)"><g><rect x="184" y="224" width="16" height="160"/></g></g><g transform="matrix(2, 0, 0, 2, -7, -12)"><g><rect x="312" y="224" width="16" height="160"/></g></g><g transform="matrix(2, 0, 0, 2, -7, -12)"><g><path d="M424,168H88V88h96V56h144v32h96V168z M104,152h304v-48h-96V72H200v32h-96V152z"/></g></g></svg></a>
					<a href="" title="Shift right"><svg version="1.1" x="0px" y="0px" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(15.384593, 0, 0, 15.384593, -269.229645, -14919.998047)"><path d="m 75.999921,1002.3609 c -0.0157,-0.6142 -0.20069,-0.9844 -0.4375,-1.25 l -13,-16.00004 c -0.61409,-0.86575 -2.00559,-1.00275 -2.87559,-0.29974 -0.87,0.70301 -0.9162,2.01748 -0.2182,2.79974 l 10.34379,12.75004 -43.81246,0 c -1.1046,0 -2,0.8954 -2,2 0,1.1046 0.8954,2 2,2 l 43.81246,0 -10.34379,12.75 c -0.7917,0.79 -0.5667,2.1759 0.269,2.9193 0.6434,0.5722 2.358,0.3899 2.82479,-0.4193 l 13,-16 c 0.33855,-0.4144 0.44162,-0.7226 0.4375,-1.25 z" style="text-indent:0;text-transform:none;direction:ltr;block-progression:tb;baseline-shift:baseline;enable-background:accumulate;" fill-opacity="1" stroke="none" marker="none" visibility="visible" display="inline" overflow="visible"/></g></svg></a>
				</div>
			</div>`;
	}
	async processImage(src, mimetype = null, width = null, height = null) {
		var _this = this;
		const img = new Image();
		img.onload = function(ev) {
			let imgWidth = img.width;
			let imgHeight = img.height;
			let base64;
			
			const canvas = document.createElement('canvas');
			const ctx = canvas.getContext('2d');
			if (!width && !height) {
				width = imgWidth;
				height = imgWidth;
			} else {
				if (!width) width = Math.round(height * (imgWidth / imgHeight));
				if (!height) height = Math.round(width / (imgWidth / imgHeight));
				if (imgWidth > imgHeight) {
					if (imgWidth > width) {
						imgHeight *= width / imgWidth;
						imgWidth = width;
					}
				} else {
					if (imgHeight > height) {
						imgWidth *= height / imgHeight;
						imgHeight = height;
					}
				}
			}
			const x = -(imgWidth - width) / 2;
			const y = -(imgHeight - height) / 2;
			canvas.width = width;
			canvas.height = height;
			ctx.drawImage(ev.target, x, y, imgWidth, imgHeight);
			if (mimetype && (mimetype === 'image/png' || mimetype === 'image/webp')) {
				base64 = canvas.toDataURL(mimetype);
			} else {
				base64 = canvas.toDataURL('image/jpeg', 1.0);
			}

			_this.add(base64);
		};
		img.src = src;
	}
}
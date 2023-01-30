var splitNumber = function(n) {
	n = n.toString();
	n = new Array(4 - n.toString().length % 3).join("U") + n;
	return n.replace(/([0-9U]{3})/g, "$1 ").replace(/U/g, "").replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
}
var $ = function(selector) {
	if (selector.length > 0) return document.querySelector(selector);
}
var $$ = function(selector) {
	if (selector.length > 0) return document.querySelectorAll(selector);
}
var strToDom = function(str) {
	var div = document.createElement('div');
	div.innerHTML = str.trim();
	return div.childNodes;
}
var sender = async function(opts, data) {
	const response = await fetch(
		opts.url, 
		{
			method: opts.method || 'GET',
			mode: opts.mode || 'cors',
			cache: opts.cache || 'no-cache',
			credentials: opts.credentials || 'same-origin',
			headers: {
				'Content-Type': opts.contentType || 'application/json'
			},
			redirect: 'follow',
			referrerPolicy: 'no-referrer',
			body: JSON.stringify(data)
		}
	);
	try {
		return await response.text();
	} catch (e) {
		console.error('Fuck!');
		console.log(e, response);
	}
}
var genPass = function(len = 4) {
	var charset = "abcdefghijklmnopqrstuvwxyz0123456789",
		retVal = "";
	for (var i = 0, n = charset.length; i < len; ++i) {
		retVal += charset.charAt(Math.floor(Math.random() * n));
	}
	return retVal;
}
if (!Date.now) {
    Date.now = function() { return new Date().getTime(); }
}
'use strict';

const smule = require('./index.js');

const url = 'https://smule.com/recording/titanium-acoustic/664072227_604510719';

smule.type(url).then(res => {
	console.log(res);
});

smule.source(url).then(res => {
	console.log(res);
});

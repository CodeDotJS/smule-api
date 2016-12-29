'use strict';

const got = require('got');
const Promise = require('pinkie-promise');

const mediaType = arg => {
	if (typeof arg !== 'string') {
		return Promise.reject(new Error('URL required!'));
	}

	return got(arg).then(res => {
		const $ = res.body;
		return $.split(`twitter:player:stream:content_type" content="`)[1].split('">')[0];
	}).catch(err => {
		if (err & err.code === 404) {
			err.message = 'requested audio/video not avaiable';
		}
		return err.message;
	});
};

const fetchLink = arg => {
	if (typeof arg !== 'string') {
		return Promise.reject(new Error('URL required!'));
	}

	return got(arg).then(res => {
		const $ = res.body;
		return $.split(`twitter:player:stream" content="`)[1].split('">')[0].replace(/amp;/g, '');
	}).catch(err => {
		if (err & err.code === 404) {
			err.message = 'requested audio/video not avaiable';
		}
		return err.message;
	});
};

exports.type = mediaType;
exports.source = fetchLink;

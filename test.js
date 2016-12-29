import test from 'ava';
import fn from './index.js';

const url = 'https://smule.com/recording/titanium-acoustic/664072227_604510719';

test(async t => {
	const songType = await fn.type(url);
	const songSource = await fn.source(url);

	t.is(songType, 'audio/mp4');
	t.is(songSource, `https://www.smule.com/redir?e=1&t=1482990388.3267984.https%3A%2F%2Fwww.smule.com%2Frecording%2Ftitanium-acoustic%2F664072227_604510719.tw_stream&url=e%3Ap4MNZY0bvW4V7SlQdqhoKb8eY1os8V3j3se0Yyd1uXj4ECYmcNSh9Tk1CZgErN56XWKACfLs2Ya5%2BJsBhZX6EnWbVvoFeupGp9az0kdZpI82oHMqS9rMQE9euse2KIIFlmpz`);
});

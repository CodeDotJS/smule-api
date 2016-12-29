# smule-api

> :boom: A simple API for [Smule](https://smule.com)

## Install

```
$ npm install --save smule-api
```

## Usage

- `For detecting` __`fileType :`__

__`url`__ `:` `https://smule.com/recording/titanium-acoustic/664072227_604510719`

```js
const smule = require('smule-api');

smule.type(url).then(res => {
  console.log(res);
  // => audio/mp4
});
```

- `For extracing` __`direct link`__ `to download audio/video :`

```js
smule.source(url).then(res => {
  console.log(res);
  // => https://www.smule.com/redir?....Flmpz
});
```

## API

### __`smule.type(url)`__

- `Returns a promise for a string of media type avaiable.`

### __`smule.source(url)`__

- `Returns a promise for a string of downloadable link for given url`

#### `url`
`TYPE` : `string`

## Related

- __[`Smule`](https://github.com/CodeDotJS/smule)__ `-
A complete media downlaoder for Smule`

## License

MIT &copy; [Rishi Giri](https://github.com/CodeDotJS)

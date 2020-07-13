# hash-scripts-loader

Load scripts with a #hash in Core.

## Install

Install module

```sh
npm install @abcnews/hash-scripts-loader
```

Put in code

```javascript
import loadScripts from "@abcnews/hash-scripts-loader";
loadScripts();
```

## Usage

Put something like `#interactivescriptsENCODEDldhgjldkjg3lk43nlkjbnsdlkfn` if a CoreMedia article. With the encoded string being a [base-36-props](https://github.com/abcnews/base-36-props) string. Use the [base 36 converter](https://www.abc.net.au/res/sites/news-projects/base-36-props-converter/1.0.0/) to get the string.

Use the following pattern.

```json
{"scripts": ["https://path.to.your.com/script.js"]}
```

Multiple scripts supported.

## Proxy

When using the preview site you can proxy a local script using `proxy` and `proxyencoded` query strings.

- `?proxy=https://ws204914.aus.aunty.abc.net.au:8000/index.js` seems to work only on `https://master-news-web.news-web-preview.presentation-layer.abc-prod.net.au` domain NOT nucwed
- `?proxyencoded=5flhz4us1jwv2ryyloaj9zytj0scx2zv3at3b2mgy8p2gnwf1xw1araikd8atfti1h6hfse65289hftsamn2oco3e5tcin6trz542ef1` with the encoded string something like the following:

```
{ "scripts": ["https://ws204914.aus.aunty.abc.net.au:8000/index.js"] }
```

Use this [base36 encoding tool](https://www.abc.net.au/res/sites/news-projects/base-36-props-converter/1.0.0/) to get the string.

## Standalone loader

Attach this standalone JavaScript file to your CoreMedia article to use this loader in Presentation Layer.

To do this, create a new JavaScript document and paste the URL into the URL field and check it in. Then attach the JS document in your article.

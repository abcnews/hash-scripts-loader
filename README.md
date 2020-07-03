# @abcnews/hash-scripts-loader

Load scripts with a #hash in Core.

## Install

`npm install @abcnews/hash-scripts-loader`

```
import loadScripts from "@abcnews/hash-scripts-loader";
loadScripts();
```

## Usage

Put something like `#interactivescriptsENCODEDldhgjldkjg3lk43nlkjbnsdlkfn` if a CoreMedia article. With the encoded string being a [base-36-props](https://github.com/abcnews/base-36-props) string.

Use the following pattern.

```
{"scripts": ["https://path.to.your.com/script.js"]}
```

Multiple scripts supported.

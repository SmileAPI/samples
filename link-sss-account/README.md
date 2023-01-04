## Getting started

config api key and api secret in the file [./public/index.html](./public/index.html)

```js
// your api key
window.smileEnvConfig.API_KEY = '<YOUR_API_KEY>';

// your api secret
window.smileEnvConfig.API_SECRET = '<YOUR_API_SECRET>';
```
use yarn

```
yarn install
yarn start
```

use npm

```
npm install
npm run start
```

## Connect.js

Here the iframe is used to embed the wink widget in the web application,you can refer to the usage method to make the SDK run in the iframe.

## LinkHtml.js

In this file, some string splicing operations are performed on the HTML template, which is convenient for use in iframe.

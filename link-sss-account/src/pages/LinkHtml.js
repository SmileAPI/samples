const htmlParameter1V2 =
  '<!DOCTYPE html>\n' +
  '<html>\n' +
  '<head>\n' +
  '<meta charset="utf-8" />\n' +
  '<meta http-equiv="X-UA-Compatible" content="IE=edge" />\n' +
  '<meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +
  '<link rel="icon" href="smileicon32.webp" sizes="32x32">\n' +
  '<link rel="icon" href="smileicon192.webp" sizes="192x192">\n' +
  '<title>Smile Wink Quickstart</title>\n' +
  '<script src="https://web.';
const html1V2 =
  '/v2/smile.v2.js"></script>\n' +
  '</head>\n' +
  '<body>\n' +
  '<script type="text/javascript">\n' +
  'let token = "';

// eslint-disable-next-line no-useless-concat
const html2V2 = '";\n' + 'let host = "';

const html3V2 =
  '"\n' +
  'const smileLinkModal = new SmileLinkModal({\n' +
  'apiHost: host,\n' +
  'userToken: token,\n' +
  'topProviders: [],\n' +
  'providers: ["sss_ph"],\n' +
  'enableUpload:true,\n' +
  'companyName: "NICELOAN",\n' +
  'enableSampleModel: true,\n' +
  'onAccountCreated: ({ accountId, userId, providerId }) => {},\n' +
  'onAccountConnected: ({ accountId, userId, providerId }) => {},\n' +
  'onAccountRemoved: ({ accountId, userId, providerId }) => {},\n' +
  'onTokenExpired: () => {},\n' +
  'onClose: () => {\n' +
  "   parent.postMessage('close','*');\n " +
  "   console.log('可以看见？',parent);\n" +
  '},\n' +
  'onAccountError: ({ accountId, userId, providerId, errorCode }) => {},\n' +
  'onUploadsCreated: ({ uploads, userId }) => {},\n' +
  '});\n' +
  'smileLinkModal.open()\n' +
  '</script>\n' +
  '</body>\n' +
  '</html>\n';

const html4V2 =
  '"\n' +
  'const smileLinkModal = new SmileLinkModal({\n' +
  'apiHost: host,\n' +
  'userToken: token,\n' +
  'topProviders: [],\n' +
  'providers: ["sss_ph"],\n' +
  'enableUpload:false,\n' +
  'companyName: "NICELOAN",\n' +
  'enableSampleModel: true,\n' +
  'onAccountCreated: ({ accountId, userId, providerId }) => {},\n' +
  'onAccountConnected: ({ accountId, userId, providerId }) => {},\n' +
  'onAccountRemoved: ({ accountId, userId, providerId }) => {},\n' +
  'onTokenExpired: () => {},\n' +
  'onClose: () => {\n' +
  "   parent.postMessage('close','*');\n " +
  "   console.log('可以看见？',parent);\n" +
  '},\n' +
  'onAccountError: ({ accountId, userId, providerId, errorCode }) => {},\n' +
  'onUploadsCreated: ({ uploads, userId }) => {},\n' +
  '});\n' +
  'smileLinkModal.open()\n' +
  '</script>\n' +
  '</body>\n' +
  '</html>\n';
export { htmlParameter1V2, html1V2, html2V2, html3V2, html4V2 };
